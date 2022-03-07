import django
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse

from user.models import User
from user.serializers import UserSerializer

# from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        users = User.objects.all()
        user_serializer=UserSerializer(users,many=True)
        return JsonResponse(user_serializer.data,json_dumps_params={'ensure_ascii': False}, status=200,safe=False)

# @csrf_exempt
# def SaveFile(request):
#     file=request.FILES['file']
#     file_name=default_storage.save(file.name,file)
#     return JsonResponse(file_name,safe=False)