from rest_framework import serializers
from comidas.models.lanches import lanches

class lanchesSerializer(serializers.ModelSerializer):
    class Meta:
        model = lanches
        fields = ('nome','preco','ingredientes')