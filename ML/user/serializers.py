from dataclasses import field
from rest_framework import serializers
from user.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # fields = ['user_id','user_name', 'user_email','user_password','user_address','user_type']
