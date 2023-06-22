from django.shortcuts import render, redirect
from django.urls import reverse
from django.core.mail import EmailMessage
from .forms import ContactForm
from portfolio.models import Project

# Create your views here.
def index(request):
    projects = Project.objects.all()
    contact_form = ContactForm()
    ctx = {"projects": projects, "form" : contact_form}

    if request.method == 'POST':
        contact_form = ContactForm(data=request.POST)
        if contact_form.is_valid():
            name = request.POST.get('name')
            subject = request.POST.get('subject')
            email = request.POST.get('email')
            message = request.POST.get('message')

            email = EmailMessage(
                f"Nuevo mensaje desde portfolio",
                f"De {name} <{email}>\n\nEscribió:\n\n{message}",
                "evelazquez2604@gmail.com",
                ["evelazquez2604@gmail.com"],
                reply_to=[email]
            )

            try:
                email.send()
                return redirect(reverse('thanks'))
            except:
                return redirect(reverse('index')+"?contact-fail")

    return render (request, 'core/index.html', ctx)
    
def thanks(request):
    return render(request, 'core/thanks.html')