from rest_framework import serializers
from .models import GuestBook

class GuestBookSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    class Meta:
        model = GuestBook
        fields = '__all__'
    