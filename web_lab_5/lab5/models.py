from django.db import models
from django.shortcuts import redirect
from django.urls import reverse


class CardInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, verbose_name="Name Of Ship")
    tonnage = models.TextField(max_length=100, verbose_name="Tonnage")
    am_of_passengers = models.IntegerField(null=True, blank=True, verbose_name="Amount of passengers")

    def get_absolute_url(self):
        return reverse('update-ship', kwargs={'pk': self.id})

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Card"
        verbose_name_plural = "Cards"
