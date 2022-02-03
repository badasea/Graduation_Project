# from django.conf.urls import url
from django.urls import path
from user import views

urlpatterns=[
    path('user/',views.userApi),
]