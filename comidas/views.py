from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models.lanches import lanches
from .models.bebidas import bebidas
from .serializers.bebidas_serializer import bebidasSerializer
from .serializers.lanches_serializer import lanchesSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class LanchesViewSet(viewsets.ModelViewSet):
    queryset = lanches.objects.all()
    serializer_class = lanchesSerializer
    # permission_classes = [IsAuthenticated]

class BebidasViewSet(viewsets.ModelViewSet):
    queryset = bebidas.objects.all()
    serializer_class = bebidasSerializer
    # permission_classes = [IsAuthenticated]

#Funções para listar dados do App comidas

def listarBebidas(request):
    drinks = bebidas.objects.all()
    context = {
        'drinks': drinks,
    }
    return render(request, 'posts/listar_bebidas.html', context)

def listarLanches(request):
    foods = lanches.objects.all()
    context = {
        'foods': foods,
    }
    return render(request, 'posts/listar_lanches.html', context)

# @api_view(['POST'])
# def Login(request):
#     username = request.data.get('username')
#     password = request.data.get('password')

#     user = authenticate(
#         username = username,
#         password = password

#     )

#     if user:
#         token, created = Token.objects.get_or_create( user = user )

#         return Response({'key' : token.key},
#             status = status.HTTP_201_CREATED
#         )
    
#     return Response({'error' : 'não encontrado'}, status = status.HTTP_400_BAD_REQUEST)

# #Páginas Web para listar dados via api do App comidas

@api_view(['GET','POST'])
def api_listar_bebidas(request):
    if request.method == 'GET':
        drinks = bebidas.objects.all()
        Bebida_Serializer = bebidasSerializer(drinks, many = True)

        return Response(Bebida_Serializer.data,status=status.HTTP_200_OK)

    else:
        Bebida_Serializer = bebidasSerializer(data=request.data)
        if Bebida_Serializer.is_valid():
            Bebida_Serializer.save()
            return Response(Bebida_Serializer.data,status=status.HTTP_200_OK)
    
    return Response(Bebida_Serializer.data,status=status.HTTP_200_OK)
    

@api_view(['GET','POST'])
def api_listar_lanches(request):
    if request.method == 'GET':
        foods = lanches.objects.all()
        Lanche_Serializer = lanchesSerializer(foods, many = True)

        return Response(Lanche_Serializer.data,status=status.HTTP_200_OK)

    else:
        Lanche_Serializer = lanchesSerializer(data=request.data)
        if Lanche_Serializer.is_valid():
            Lanche_Serializer.save()
            return Response(Lanche_Serializer.data,status=status.HTTP_200_OK)
    
    return Response(Lanche_Serializer.data,status=status.HTTP_200_OK)