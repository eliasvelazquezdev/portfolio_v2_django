from django.shortcuts import render, get_object_or_404
from .models import Post, Category

# Create your views here.
def blog(request):
    posts = Post.objects.all()
    categories = Category.objects.all()
    ctx = {"posts" : posts, "categories" : categories}
    
    return render(request, 'blog/blog.html', ctx )

def post(request, post_id, post_slug):
    post = get_object_or_404(Post, id=post_id)
    ctx = {"post" : post}

    return render(request, 'blog/post.html', ctx)

def category(request, category_id, category_slug):
    category = get_object_or_404(Category, id=category_id)
    ctx = {"category" : category}

    return render(request, 'blog/category.html', ctx)