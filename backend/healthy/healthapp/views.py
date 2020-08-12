from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
import pandas as pd
import numpy as np
from . import healthyfyme

# output_json=[{'percent': '', 'suggestion': ''}]
percent = 0

@api_view(['GET'])
def handling_get_request(request):
    if request.method == 'GET':
        # posts={'percen':30}
        # post_list = serializers.serialize('json', posts)
        # print(post_list)
        # value=50
        # suggestions="Drink plenty of fluids."
        # list_to_json = prepare_json(value,suggestions)
        # output_json_final = json.dumps(output_json[0]['percent'])
        # percent = output_json[0]['percent']
        global percent
        return HttpResponse(percent)
        # return HttpResponse(post_list, content_type="text/json-comment-filtered")

@api_view(['POST'])
def handling_post_request(request):
    if request.method == 'POST':
        received_json_data=json.loads(request.body) 
        global percent 
        percent = predict_percent(received_json_data)
        # output_json[0]['suggestion'] = healthyfyme.health_suggestions(output_json[0]['percent'])
        # print(output_json)
        # output_json_final = json.dumps(output_json)
        return HttpResponse(percent)
        # serializer = request.data
        # if serializer.is_valid():
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer, status=status.HTTP_400_BAD_REQUEST)

def predict_percent(received_json_data):
    parsed_json = convert_to_dict(received_json_data)
    bmi = bmi_calulator(parsed_json['weight'], parsed_json['height'])
    fs = wbc_calulator(parsed_json['sugar'])
    wbc = wbc_calulator(parsed_json['WBC'])
    parsed_list = [bmi, wbc, int(parsed_json['HBR']), int(parsed_json['HBA1C']), fs,
            int(parsed_json['cholesterol']), int(parsed_json['BP'])]
    user_data_frame = list_to_dataframe(parsed_list)
    X_Train, X_Test, Y_Train, Y_Test = healthyfyme.data_split()
    predicted_value = healthyfyme.multilinear_model(user_data_frame, X_Train, Y_Train)
    # output is 2d array, so list conversion
    percent=predicted_value.tolist()
    return (int(percent[0]))
        # return HttpResponse("SUCCESS")

def convert_to_dict(json):
    parsed_json={k:v for k, v in json.items() if k in ('sex', 'age', 'height', 'weight', 'WBC', 'HBR',
                                                       'HBA1C', 'sugar', 'cholesterol', 'BP')}
    for key,val in parsed_json.items():
        parsed_json[key]=val['value']
    return parsed_json

def bmi_calulator(weight,height):
    bmi=round(int(weight)/((int(height)/100)*(int(height)/100)),2)
    return bmi

def fs_calulator(fastingsugar):
    fs=int(fastingsugar)
    res_fs=0
    if fs>=120:
        res_fs=1
    elif fs<120:
        res_fs = 0
    return res_fs

def wbc_calulator(wbc):
    wbc=int(wbc)
    res_wbc=0
    if wbc >= 0 and wbc <4000:
        res_wbc=0
    elif wbc>=4000 and wbc<=11000:
        res_wbc=1
    return res_wbc

def list_to_dataframe(list):
    data_frame_temp = np.array(list)
    data_frame = np.reshape(data_frame_temp, (-1, 7))
    return data_frame