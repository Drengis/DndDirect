from rest_framework import serializers
from .models import SimpleWeapons, MilitaryWeapons, LightArmors

class SimpleWeaponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleWeapons
        fields = '__all__'

class MilitaryWeaponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilitaryWeapons
        fields = '__all__'
        
class LightArmorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LightArmors
        fields = '__all__'