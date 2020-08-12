from django.urls import path

from . import views

urlpatterns = [
    path('post_data/', views.handling_post_request, name='handling_post_request'),
    path('get_data/', views.handling_get_request, name='handling_get_request'),
]