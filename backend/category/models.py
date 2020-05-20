from django.db import models

# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=50)
    image_field=models.ImageField(upload_to='images/',default='Category/images/icon.png')
    url=models.URLField(max_length=400)