from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog, name='blog'),
    path('post/<int:post_id>/<slug:post_slug>/', views.post, name='post_view'),
    path('category/<int:category_id>/<slug:category_slug>/', views.category, name='category_view'),
]
