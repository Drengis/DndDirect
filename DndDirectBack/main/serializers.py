from rest_framework import serializers
from .models import SimpleWeapons

class SimpleWeaponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleWeapons
        fields = '__all__'

