# Generated by Django 3.0.6 on 2020-05-20 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orderlist', '0003_auto_20200520_1919'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderlist',
            name='item',
            field=models.TextField(blank=True),
        ),
    ]
