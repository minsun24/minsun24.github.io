from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GuestBookViewSet

router = DefaultRouter()
router.register(r'guestbook', GuestBookViewSet)  # /api/guestbook/

urlpatterns = [
    path('api/', include(router.urls)),  # `/api/guestbook/` 정상적으로 연결됨
]