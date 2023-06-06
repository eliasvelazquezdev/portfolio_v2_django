from django.shortcuts import render
from django.http import HttpResponse
from portfolio.models import Project

# Create your views here.
def index(request):
    projects = Project.objects.all()
    ctx = {"projects": projects}
    
    return render (request, 'core/index.html', ctx)
    
def thanks(request):
    return render(request, 'thanks.html')