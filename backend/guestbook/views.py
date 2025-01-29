from django.shortcuts import render
from rest_framework import viewsets
from .models import GuestBook
from .serializers import GuestBookSerializer

# Create your views here.

class GuestBookViewSet(viewsets.ModelViewSet):
    queryset = GuestBook.objects.all().order_by('-created_at')
    serializer_class = GuestBookSerializer 


    # ✅ POST 요청이 정상적으로 처리되는지 확인하는 메서드 추가
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
