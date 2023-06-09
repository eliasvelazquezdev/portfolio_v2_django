from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('post/<str:id>/', views.post, name='post_id')
]
