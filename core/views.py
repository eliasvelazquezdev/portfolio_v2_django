from django.shortcuts import render
from portfolio.models import Project

# Create your views here.
def index(request):
    projects = Project.objects.all()
    ctx = {"projects": projects}
    
    return render (request, 'core/index.html', ctx)
    
def thanks(request):
    return render(request, 'thanks.html')