from django.urls import path
from main import views 

urlpatterns = [
    path('simple-weapons/get', views.SimpleWeaponsViewGet.as_view()),
    path('miilitary-weapons/get', views.MilitaryWeaponsViewGet.as_view())
]
