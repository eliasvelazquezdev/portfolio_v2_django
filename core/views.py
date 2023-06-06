from django.shortcuts import render
from django.http import HttpResponse
from mobi2.decorators import detect_mobile
from portfolio.models import Project

# Create your views here.
@detect_mobile
def index(request):
    projects = Project.objects.all()
    ctx = {"projects": projects}
    if not request.mobile:
        return render (request, 'core/index.html', ctx)
    else:
        return render (request, 'core/index_mobile.html', ctx)


def thanks(request):
    return render(request, 'thanks.html')