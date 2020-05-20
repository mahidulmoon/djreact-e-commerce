from django.urls import path,include
from rest_framework import routers
from .views import OrderViewset


router = routers.DefaultRouter()
router.register('orderlist',OrderViewset)



urlpatterns = [
    path('',include(router.urls)),
]
