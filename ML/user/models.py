from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=45)
    user_email = models.CharField(max_length=45)
    user_password = models.CharField(max_length=45)
    user_address = models.CharField(max_length=45)
    user_type = models.CharField(max_length=45)
    user_like_place = models.CharField(max_length=45)
    user_like_type = models.CharField(max_length=45)
    user_img = models.CharField(max_length=255)
    class Meta:
        db_table = "user"