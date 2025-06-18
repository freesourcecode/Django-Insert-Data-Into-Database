from django.shortcuts import render, redirect
from .models import Member

# Create your views here.
def index(request):
    members = Member.objects.all()
    return render(request, 'blog/index.html', {'members': members})

def insert(request):
    member = Member(firstname=request.POST['firstname'], lastname=request.POST['lastname'], address=request.POST['address'])
    member.save()
    return redirect('/')

