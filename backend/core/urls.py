from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, LoginView, PostViewSet, UserProfileView

router = DefaultRouter()
router.register('posts', PostViewSet, basename='post')

urlpatterns = [
    path('api/register/', RegisterView.as_view()),
    path('api/login/', LoginView.as_view()),
    path('api/profile/<int:pk>/', UserProfileView.as_view()),
    path('api/', include(router.urls)),
]
