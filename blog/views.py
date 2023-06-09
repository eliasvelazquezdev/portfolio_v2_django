from django.shortcuts import render
from .models import Post, Category

# Create your views here.
def blog(request):
    posts = Post.objects.all()
    categories = Category.objects.all()
    ctx = {"posts" : posts, "categories" : categories}
    
    return render(request, 'blog/blog.html', ctx )

def post(request, id):
    post = Post.objects.get(id=id)
    ctx = {"post" : post}

    return render(request, 'blog/post.html', ctx)