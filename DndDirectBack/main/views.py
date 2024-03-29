from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SimpleWeapons, MilitaryWeapons
from .serializers import SimpleWeaponsSerializer, MilitaryWeaponsSerializer

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