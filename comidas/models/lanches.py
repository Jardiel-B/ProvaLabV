from django.db import models

class lanches(models.Model):
    nome = models.CharField(max_length=50)
    preco = models.FloatField()
    ingredientes = models.CharField(max_length=300)