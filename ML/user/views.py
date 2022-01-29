from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from user.serializers import UserSerializer
from user.models import User

# Create your views here.
@csrf_exempt
def userApi(request,id=0):
    if request.method == 'GET':
        users = User.objects.all()
        users_serializer = UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data,safe=False)