from django.shortcuts import render
from .models import Post

# Create your views here.
def blog(request):
    posts = Post.objects.all()
    ctx = {"posts" : posts}
    return render(request, 'blog/blog.html', ctx )