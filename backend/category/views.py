from django.shortcuts import render
from rest_framework import viewsets
from .models import Category
from django.contrib.auth.models import User
from .serializers import CategorySerializer,UserSerializer
# Create your views here.


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer