from django import forms
from .models import CardInfo


class CardInfoForm(forms.ModelForm):
    class Meta:
        model = CardInfo
        fields = ["name", "tonnage", "am_of_passengers"]
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-name','rows': 10}),
            'tonnage': forms.NumberInput(attrs={'class': 'form-tonnage', }),
            'am_of_passengers': forms.NumberInput(attrs={'class': 'form-amount'}),
        }


