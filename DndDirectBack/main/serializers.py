from rest_framework import serializers
from .models import SimpleWeapons, MilitaryWeapons, LightArmors, MediumArmors, HeavyArmors, Spells

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
        
class MediumArmorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediumArmors
        fields = '__all__'
        
class HeavyArmorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeavyArmors
        fields = '__all__'
        
class SpellsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spells
        fields = '__all__'