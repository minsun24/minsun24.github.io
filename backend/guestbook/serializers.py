from rest_framework import serializers
from .models import GuestBook

class GuestBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestBook
        fields = '__all__'
    