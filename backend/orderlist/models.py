from django.db import models

# Create your models here.

class OrderList(models.Model):
    name = models.CharField(max_length=50)
    phnno = models.CharField(max_length=50)
    email = models.EmailField()
    cityname = models.CharField(max_length=50)
    areaname = models.CharField(max_length=50)
    address = models.TextField()
    item = models.TextField(blank=True)