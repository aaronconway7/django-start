from django.conf.urls import url
from .views import Home

app_name = 'staticpages'

urlpatterns = [
    url(r'^$', Home.as_view(), name="home"),
]
