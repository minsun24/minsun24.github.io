from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GuestBookViewSet

router = DefaultRouter()
router.register('guestbook', GuestBookViewSet, basename='guestbook')  # ✅ `guestbook/` 없이 설정



urlpatterns = [
    path('', include(router.urls)), # https://minsun24-github-io.onrender.com/guestbook
]