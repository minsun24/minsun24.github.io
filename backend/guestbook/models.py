from django.db import models

# Create your models here.
class GuestBook(models.Model):
    name = models.CharField(max_length=50, default="익명")  # 이름(익명 가능)
    message = models.TextField()        # 방명록 내용
    # 이모지, 배경색은 프론트에서 랜덤으로 생성되는 것
    emoji = models.CharField(max_length=10, default="🐰")  # 랜덤 이모지
    is_guest = models.BooleanField(default=True)    # 기본이 익명
    created_at = models.DateTimeField(auto_now_add=True)    # 작성 날짜

    def __str__(self):
        return f"{self.name}: {self.message[:20]}..."