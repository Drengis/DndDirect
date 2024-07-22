from django.contrib import admin
from django.urls import path
from main import views, authentication
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('admin', admin.site.urls),
    path('users/', authentication.UsersViewSet.as_view({'get': 'list'}), name='users-list'),
    path('users/create/', authentication.UsersViewSet.as_view({'post': 'create'}), name='users-create'),
    path('users/login/', authentication.UsersViewSet.as_view({'post': 'login'}), name='users-login'),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
    path('simple-weapons/get', views.SimpleWeaponsViewGet.as_view()),
    path('miilitary-weapons/get', views.MilitaryWeaponsViewGet.as_view()),
    path('light-armors/get', views.LightArmorsViewGet.as_view()),
    path('medium-armors/get', views.MediumArmorsViewGet.as_view()),
    path('heavy-armors/get', views.HeavyArmorsViewGet.as_view()),
    path('spells/get', views.SpellsViewGet.as_view()),
    
    path('characters/get/all', views.CharactersViewSet.as_view({'get': 'all'})),
    path('characters/get/<int:id>', views.CharactersViewSet.as_view({'get': 'specific'})),
    path('characters/update', views.CharactersViewSet.as_view({'post': 'update'})),
    
    path('charactersskills/get/<int:id>', views.CharactersSkillsViewSet.as_view({'get': 'getskills'})),
    path('charactersskills/update', views.CharactersSkillsViewSet.as_view({'post': 'updateskills'})),
    
    path('charactersweapons/get/<int:id>', views.CharactersWeaponsViewSet.as_view({'get': 'getweapons'})),
    path('charactersweapons/update', views.CharactersWeaponsViewSet.as_view({'post': 'updateweapons'})),
    path('charactersweapons/сreate', views.CharactersWeaponsViewSet.as_view({'post': 'createweapons'})),
    path('charactersweapons/delete/<int:id>', views.CharactersWeaponsViewSet.as_view({'delete': 'deleteweapon'})),
    
]
