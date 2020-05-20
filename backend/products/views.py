from django.shortcuts import render
from rest_framework import viewsets
from .models import Shirts,Mobile
from .serializers import ShirtSerializer,MobileSerializer
# Create your views here.

class ShirtViewset(viewsets.ModelViewSet):
    queryset = Shirts.objects.all()
    serializer_class = ShirtSerializer


class MobileViewset(viewsets.ModelViewSet):
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializer