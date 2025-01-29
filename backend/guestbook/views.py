from django.shortcuts import render
from rest_framework import viewsets
from .models import GuestBook
from .serializers import GuestBookSerializer

# Create your views here.

class GuestBookViewSet(viewsets.ModelViewSet):
    queryset = GuestBook.objects.all().order_by('-created_at')
    serializer_class = GuestBookSerializer 
