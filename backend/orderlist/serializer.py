from rest_framework import serializers
from .models import OrderList

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderList
        fields = '__all__'