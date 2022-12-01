from rest_framework import serializers
from comidas.models.bebidas import bebidas

class bebidasSerializer(serializers.ModelSerializer):
    class Meta:
        model = bebidas
        fields = ('nome','preco','quantidade')