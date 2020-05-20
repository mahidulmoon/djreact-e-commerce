from rest_framework import serializers
from .models import Shirts,Mobile

class ShirtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shirts
        fields = '__all__'

class MobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mobile
        fields = '__all__'