from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', HomePage.as_view(), name="homepage"),
    path("create-ship", create_ship, name="add-goods"),
    path('update-ship/<int:pk>/', update_ship, name="update-ship"),
    path('delete-ship/<int:pk>/', delete_ship, name="delete-ship"),

]
