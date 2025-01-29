from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GuestBookViewSet

# ✅ `trailing_slash=False` 추가 (자동 슬래시 문제 방지)
router = DefaultRouter(trailing_slash=False)  
router.register(r'guestbook', GuestBookViewSet, basename='guestbook')

urlpatterns = [
    path('', include(router.urls)),  # ✅ `api/` 경로를 여기서 제거
]
