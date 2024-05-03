from rest_framework import status
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from .models import *
from django.contrib.auth.models import User
from .serializers import *
from django.shortcuts import get_object_or_404

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

class CharactersViewGet(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        char = Сharacters.objects.all()
        serializer = СharactersSerializer(char, many=True)
        return Response(serializer.data)   
    
class UsersViewSet(ViewSet):
    def list(self, request):
        users = User.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.email = request.data['email']
            user.save()
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "user": serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user_exists = User.objects.filter(username=username).exists()
        if not user_exists:
            return Response({"error": "Invalid username or password"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.get(username=username)
        if not user.check_password(password):
            return Response({"error": "Invalid username or password"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UsersSerializer(user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "user": serializer.data})
        
    
