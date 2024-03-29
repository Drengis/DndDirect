from rest_framework import serializers
from .models import SimpleWeapons, MilitaryWeapons

class SimpleWeaponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleWeapons
        fields = '__all__'

class MilitaryWeaponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilitaryWeapons
        fields = '__all__'