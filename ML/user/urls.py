from django.conf.urls import url

from user import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^user$',views.userApi),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)