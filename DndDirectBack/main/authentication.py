from rest_framework import status
from rest_framework.viewsets import ViewSet
from django.contrib.auth.models import User
from rest_framework.response import Response
from .serializers import UsersSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

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
            
            refresh_token = RefreshToken.for_user(user)
            access_token = str(refresh_token.access_token)
            
            return Response({"token": access_token, "user": serializer.data})
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
        refresh_token = RefreshToken.for_user(user)
        access_token = str(refresh_token.access_token)
        
        return Response({"token": access_token, "user": serializer.data})
        
    
