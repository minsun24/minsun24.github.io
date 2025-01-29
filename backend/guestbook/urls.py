from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GuestBookViewSet

# ✅ `trailing_slash=False`로 설정하여 `/guestbook`과 `/guestbook/` 모두 허용
router = DefaultRouter(trailing_slash=False)
router.register('guestbook', GuestBookViewSet, basename='guestbook')  # ✅ `guestbook/` 없이 설정



urlpatterns = [
    path('', include(router.urls)),
]