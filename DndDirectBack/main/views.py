from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework import status
from .models import *
from .serializers import *

class SimpleWeaponsViewGet(APIView):
    def get(self, request):
        Sweapons = SimpleWeapons.objects.all()
        serializer = SimpleWeaponsSerializer(Sweapons, many=True)
        return Response(serializer.data)
    
class MilitaryWeaponsViewGet(APIView):
    def get(self, request):
        Mweapons = MilitaryWeapons.objects.all()
        serializer = MilitaryWeaponsSerializer(Mweapons, many=True)
        return Response(serializer.data)

class LightArmorsViewGet(APIView):
    def get(self, request):
        Larmors = LightArmors.objects.all()
        serializer = LightArmorsSerializer(Larmors, many=True)
        return Response(serializer.data)
       
class MediumArmorsViewGet(APIView):
    def get(self, request):
        Marmors = MediumArmors.objects.all()
        serializer = MediumArmorsSerializer(Marmors, many=True)
        return Response(serializer.data)   
    
class HeavyArmorsViewGet(APIView):
    def get(self, request):
        Harmors = HeavyArmors.objects.all()
        serializer = HeavyArmorsSerializer(Harmors, many=True)
        return Response(serializer.data)       

class SpellsViewGet(APIView):
    def get(self, request):
        spells = Spells.objects.all()
        serializer = SpellsSerializer(spells, many=True)
        return Response(serializer.data)       

class CharactersViewSet(ViewSet):
    permission_classes = [IsAuthenticated]
    
    def all(self, request):
        char = Сharacters.objects.all()
        serializer = СharactersSerializer(char, many=True)
        return Response(serializer.data)   
    
    def specific(self, request, id):
        try:
            char = Сharacters.objects.get(id=id)
            serializer = СharactersSerializer(char)
            return Response(serializer.data)
        except Сharacters.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def update(self, request):
        character_id = request.data.get('id')
        try:
            character = Сharacters.objects.get(id=character_id)
            serializer = СharactersSerializer(character, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Сharacters.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
class CharactersSkillsViewSet(ViewSet):

    def getskills(self, request, id):
        try:
            character_skills = CharactersSkills.objects.filter(characters_id=id)
            serializer = CharactersSkillsSerializer(character_skills, many=True)
            return Response(serializer.data)
        except CharactersSkills.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)