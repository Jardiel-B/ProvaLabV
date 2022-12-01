from django.contrib import admin
from .models.lanches import lanches
from .models.bebidas import bebidas
# Register your models here.

admin.site.register(lanches)
admin.site.register(bebidas)