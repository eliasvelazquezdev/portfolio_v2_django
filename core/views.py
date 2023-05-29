from django.shortcuts import render
from django.http import HttpResponse
from mobi2.decorators import detect_mobile

# Create your views here.
@detect_mobile
def index(request):
    if not request.mobile:
        return render (request, 'core/index.html')
    else:
        return render (request, 'core/index_mobile.html')


def thanks(request):
    return render(request, 'thanks.html')