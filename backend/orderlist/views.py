from django.shortcuts import render
from rest_framework import viewsets
from .serializer import OrderSerializer
from .models import OrderList
# Create your views here.

class OrderViewset(viewsets.ModelViewSet):
    queryset = OrderList.objects.all()
    serializer_class = OrderSerializer