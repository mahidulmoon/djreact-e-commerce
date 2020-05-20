from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'password','email','first_name','last_name']
        extra_kwargs = {'password': {'write_only':True, 'required':True}}

    
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        #doctor_details=Doctor_details(achievement=self.validated_data['achivement'],dept=self.validated_data['dept'])
        #doctor_details.doctor=user
        user.save()
        #doctor_details.save()
        Token.objects.create(user=user)
        return user