# Generated by Django 4.2.1 on 2023-06-06 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='type',
            field=models.CharField(default='Proyecto grupal', max_length=50, verbose_name='Tipo de proyecto'),
        ),
    ]
