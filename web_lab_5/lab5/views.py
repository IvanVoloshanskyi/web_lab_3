from django.shortcuts import render, redirect
from django.views.generic import ListView, CreateView, DetailView
from .forms import *


class HomePage(ListView):
    model = CardInfo
    template_name = 'index.html'

    def get_queryset(self):
        return CardInfo.objects.all()


class ViewProduct(DetailView):
    model = CardInfo
    template_name = 'index.html'


def create_ship(request):
    form = CardInfoForm()

    if request.method == "POST":
        form = CardInfoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
    context = {'form': form}
    return render(request, 'add-goods.html', context)


def update_ship(request, pk):
    get_ship = CardInfo.objects.get(id=pk)
    form = CardInfoForm(instance=get_ship)
    if request.method == "POST":
        form = CardInfoForm(request.POST, instance=get_ship)
        if form.is_valid():
            form.save()
            return redirect("/")

    context = {'form': form}
    return render(request, 'add-goods.html', context)


def delete_ship(request, pk):
    get_ship = CardInfo.objects.get(id=pk)
    if request.method == "POST":
        get_ship.delete()
        return redirect("/")
    context = {'name': get_ship}
    return render(request, 'delete-ship.html', context)
