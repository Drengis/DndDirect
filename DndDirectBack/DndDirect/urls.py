from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from main import views 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


urlpatterns = [
    path('admin', admin.site.urls),
    path('auth/', include('rest_framework.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
    path('simple-weapons/get', views.SimpleWeaponsViewGet.as_view()),
    path('miilitary-weapons/get', views.MilitaryWeaponsViewGet.as_view()),
    path('light-armors/get', views.LightArmorsViewGet.as_view()),
    path('medium-armors/get', views.MediumArmorsViewGet.as_view()),
    path('heavy-armors/get', views.HeavyArmorsViewGet.as_view()),
    path('spells/get', views.SpellsViewGet.as_view()),
    path('characters/get', views.CharactersViewGet.as_view()),
    path('users/', views.UsersViewSet.as_view({'get': 'list', 'post': 'create'}), name='users-list'),
    
]
