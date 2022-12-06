from django.contrib import admin
from .models import CardInfo


class CardInfoAdmin(admin.ModelAdmin):
    list_display = ("id", "name", 'tonnage', "am_of_passengers")


admin.site.register(CardInfo, CardInfoAdmin)
