from django.db import models

class bebidas(models.Model):
    nome = models.CharField(max_length=50)
    preco = models.FloatField()
    quantidade = models.IntegerField()