from django.urls import path,include
from rest_framework import routers
from .views import CategoryViewset,UserViewset


router = routers.DefaultRouter()
router.register('category',CategoryViewset)
router.register('userregister',UserViewset)


urlpatterns = [
    path('',include(router.urls)),
]
