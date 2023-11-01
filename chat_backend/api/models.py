from django.db import models

# Create your models here.

class chatField(models.Model):
    userInput = models.CharField(max_length=1000)
