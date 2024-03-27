from django.urls import path, include
from main import views 


urlpatterns = [
    path('simple-weapons/', views.SimpleWeaponsView.as_view()),
    path('huy', views.index)
]
