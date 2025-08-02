from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

def home(request):
    return HttpResponse("🚀 Your Django app is working!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  # this handles the root '/'
]