# Generated by Django 3.0.6 on 2020-05-20 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orderlist', '0002_auto_20200520_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderlist',
            name='item',
            field=models.TextField(),
        ),
    ]
