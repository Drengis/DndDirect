from django.urls import path
from main import views 

urlpatterns = [
    path('simple-weapons/get', views.SimpleWeaponsViewGet.as_view()),
    path('miilitary-weapons/get', views.MilitaryWeaponsViewGet.as_view()),
    path('light-armors/get', views.LightArmorsViewGet.as_view()),
    path('medium-armors/get', views.MediumArmorsViewGet.as_view()),
    path('heavy-armors/get', views.HeavyArmorsViewGet.as_view()),
    path('spells/get', views.SpellsViewGet.as_view()),
    path('characters/get', views.CharactersViewGet.as_view()),
    
]
