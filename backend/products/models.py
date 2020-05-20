from django.db import models

# Create your models here.

class Shirts(models.Model):
    name = models.CharField( max_length=100)
    price = models.FloatField(null=True, blank=True, default=None)
    quantity = models.IntegerField(null=True, blank=True, default=None)
    description = models.TextField()
    imagefield = models.ImageField(upload_to='images/',default='Category/images/icon.png')


class Mobile(models.Model):
    name = models.CharField( max_length=100)
    price = models.FloatField(null=True, blank=True, default=None)
    quantity = models.IntegerField(null=True, blank=True, default=None)
    description = models.TextField()
    imagefield = models.ImageField(upload_to='images/',default='Category/images/icon.png')