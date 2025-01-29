from django.contrib import admin
from .models import GuestBook
# Register your models here.


@admin.register(GuestBook)
class GuestBookEntryAdmin(admin.ModelAdmin):
    list_display = ('name', 'message', 'is_guest', 'created_at')  # 리스트에서 보여줄 필드
    list_filter = ('is_guest', 'created_at')  # 필터 추가
    search_fields = ('name', 'message')  # 검색 기능 추가

# admin.site.register(GuestBookEntry)  # 위 `@admin.register` 데코레이터가 같은 역할을 함
