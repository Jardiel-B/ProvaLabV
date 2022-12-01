"""prova_lanchonete URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework import renderers

from comidas.views import listarBebidas, listarLanches, api_listar_bebidas, api_listar_lanches
from comidas.views import BebidasViewSet, LanchesViewSet
from pedidos.views import listarPedidos, listarTelefones, listarUsuarios, api_listar_pedidos, api_listar_telefones, api_listar_usuarios
from pedidos.views import PedidosViewSet, TelefonesViewSet, UsuariosViewSet, api_listar_pedidos, api_listar_telefones, api_listar_usuarios

router = DefaultRouter()
router.register(r'pedidos', PedidosViewSet)
router.register(r'usuarios', UsuariosViewSet)
router.register(r'telefones', TelefonesViewSet)
router.register(r'bebidas', BebidasViewSet)
router.register(r'lanches', LanchesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    # path('Login', Login),

    # #Páginas Web para listar dados via api do App comidas
    path('api/bebidas', api_listar_bebidas),
    path('api/lanches', api_listar_lanches),

    # #Páginas Web para listar dados via api do App pedidos
    path('api/pedidos', api_listar_pedidos),
    path('api/usuarios', api_listar_usuarios),
    path('api/telefones', api_listar_telefones)

    # #Páginas Web para listar dados do App comidas
    # path('listar-bebidas/',listarBebidas),
    # path('listar-lanches/',listarLanches),


    # #Páginas Web para listar dados do App pedidos
    # path('listar-pedidos/',listarPedidos),
    # path('listar-usuarios/',listarUsuarios),
    # path('listar-telefones/',listarTelefones),

]
