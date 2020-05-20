from django.urls import path,include
from rest_framework import routers
from .views import ShirtViewset,MobileViewset

router = routers.DefaultRouter()
router.register('shirtlist',ShirtViewset)
router.register('mobilelist',MobileViewset)


urlpatterns = [
    path('',include(router.urls)),
]
