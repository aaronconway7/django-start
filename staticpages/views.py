# from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView

# Create your views here.
# def home(request):
#     return render(request, 'staticpages/index.html')

class Home(TemplateView):
    template_name = 'staticpages/index.html'
