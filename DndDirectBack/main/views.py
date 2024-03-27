from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SimpleWeapons
from .serializers import SimpleWeaponsSerializer

class SimpleWeaponsView(APIView):
    def get(self, request):
        weapons = SimpleWeapons.objects.all()
        serializer = SimpleWeaponsSerializer(weapons, many=True)
        return Response(serializer.data)

def index(request):
    return JsonResponse({"name": "Vitya"})
