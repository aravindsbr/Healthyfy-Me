import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression
from sklearn.svm import SVR
from sklearn.preprocessing import PolynomialFeatures
from sklearn.decomposition import PCA
from sklearn.cross_decomposition import PLSRegression

from sklearn.preprocessing import StandardScaler as ss
from sklearn import linear_model
from scipy.signal import savgol_filter
from sklearn.model_selection import cross_val_predict
from sklearn.metrics import mean_squared_error, r2_score


def data_split():
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
    csv_file=BASE_DIR+'\\resources\healthyfy_me.csv'
    datasets = pd.read_csv(csv_file)
    X = datasets.iloc[:, 5:12].values
    Y = datasets.iloc[:, -1].values
    X_Train, X_Test, Y_Train, Y_Test = train_test_split(X, Y, test_size=1 / 300, random_state=0)
    return X_Train, X_Test, Y_Train, Y_Test

def multilinear_model(user_data, X_Train, Y_Train):
    # X_Train, X_Test, Y_Train, Y_Test = data_split()
    regressor = LinearRegression()
    regressor.fit(X_Train, Y_Train)
    Y_Pred = regressor.predict(user_data)
    return Y_Pred

def polynomial_model(user_data):
    X_Train, X_Test, Y_Train, Y_Test = data_split()
    poly1 = PolynomialFeatures(degree=2)
    X_poly = poly1.fit_transform(X_Train)
    poly = LinearRegression()
    poly.fit(X_poly, Y_Train)
    Y_Pred = poly.predict(poly1.fit_transform(user_data))
    return Y_Pred

def support_vector_model(user_data):
    X_Train, X_Test, Y_Train, Y_Test = data_split()
    sc = ss()
    X_Train = sc.fit_transform(X_Train)
    X_Test = sc.transform(X_Test)
    regressor = SVR(kernel='rbf')
    regressor.fit(X_Train, Y_Train)
    Y_Pred = regressor.predict(user_data)
    return Y_Pred

def PCA_regression_model(user_data):
    pca = PCA()
    X_Train, X_Test, Y_Train, Y_Test = data_split()
    d1X = savgol_filter(X_Train, 5, polyorder=2, deriv=1)
    Xstd = StandardScaler().fit_transform(d1X[:, :])
    Xreg = pca.fit_transform(Xstd)[:, :]
    regr = linear_model.LinearRegression()
    regr.fit(Xreg, Y_Train)
    Y_Pred = regr.predict(user_data)
    return Y_Pred

def PLS_regression_model(user_data):
    pls = PLSRegression(n_components=5)
    X_Train, X_Test, Y_Train, Y_Test = data_split()
    pls.fit(X_Train, Y_Train)
    Y_Pred = pls.predict(user_data)
    return Y_Pred

def health_suggestions(percent):
    if(int(percent)<60):
        return '''
        Diet Plan : 
        1. Fill your meal with lots of fruits and vegetables. 
		2. Choose foods which is low in salt and sugar. 
        3. Choose heart-healthy fats such as olive and canola oil, fatty fish, nuts, and avocados.

        Health Plan:
        1. Do atleast 30 mins of early morning walk.
        2. Include yourself in any yoga/medication activities.
        3. Minimize Western life culture.
        4. Minimize smoke and alcohol consumption if any.
        '''
    elif((int(percent)>=61)and(int(percent)<70)):
        return'''
        Diet Plan : 
        1. Fill your meal with lots of fruits and vegetables. 
		2. Choose foods which is low in salt and sugar. 
        3. Choose heart-healthy fats such as olive and canola oil, fatty fish, nuts, and avocados.
        4. Eat plenty of fiber from fruits, vegetables, and whole grains like brown rice and oatmeal.

        Health Plan:
        1. Do atleast 30 mins of early morning walk.
        2. Include yourself in any yoga/medication activities.
        3. Minimize Western life culture.
        4. Minimize smoke and alcohol consumption if any.
        '''
    elif((int(percent)>=71)and(int(percent)<80)):
        return'''
        Diet Plan : 
        1. Fill your meal with lots of fruits and vegetables.
        2. Choose heart-healthy fats such as olive and canola oil, fatty fish, nuts, and avocados.

        Health Plan:
        1. Do atleast 30 mins of early morning walk.
        2. Include yourself in any yoga/medication activities.
        3. Minimize Western life culture.
        '''
    elif((int(percent)>=81)and(int(percent)<90)):
        return'''
        Diet Plan : 
        1. Eat plenty of soluble fiber,
		2. Eat lots of fruits and vegetables,
		3. Eat fish that are high in omega-3 fatty acids

        Health Plan:
        1. Do atleast 30 mins of early morning walk.
        2. Include yourself in any yoga/medication activities.
        '''
    else:
        return'''
        You are doing great already!
        Please follow the same diet and workout routine which you are following currently!
        Eat healthy food with all protiens,fibre and vitamins!
        '''

