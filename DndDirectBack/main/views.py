from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SimpleWeapons, MilitaryWeapons, LightArmors, MediumArmors, HeavyArmors, Spells
from .serializers import *

class SimpleWeaponsViewGet(APIView):
    def get(self, request):
        weapons = SimpleWeapons.objects.all()
        serializer = SimpleWeaponsSerializer(weapons, many=True)
        return Response(serializer.data)
    
    
class MilitaryWeaponsViewGet(APIView):
    def get(self, request):
        weapons = MilitaryWeapons.objects.all()
        serializer = MilitaryWeaponsSerializer(weapons, many=True)
        return Response(serializer.data)
    
class LightArmorsViewGet(APIView):
    def get(self, request):
        weapons = LightArmors.objects.all()
        serializer = LightArmorsSerializer(weapons, many=True)
        return Response(serializer.data)
       
class MediumArmorsViewGet(APIView):
    def get(self, request):
        weapons = MediumArmors.objects.all()
        serializer = MediumArmorsSerializer(weapons, many=True)
        return Response(serializer.data)   
    
class HeavyArmorsViewGet(APIView):
    def get(self, request):
        weapons = HeavyArmors.objects.all()
        serializer = HeavyArmorsSerializer(weapons, many=True)
        return Response(serializer.data)       

class SpellsViewGet(APIView):
    def get(self, request):
        weapons = Spells.objects.all()
        serializer = SpellsSerializer(weapons, many=True)
        return Response(serializer.data)       
