from django import forms

class ContactForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.label_suffix = ""
        for field in self.fields:
            self.fields[field].widget.attrs['class'] = 'form-control text-light bg-dark'

    name = forms.CharField(label="Nombre",
                           min_length=3,
                           max_length=100,
                           widget=forms.TextInput(
                               attrs={'placeholder' : 'Nombre'}
                               ))                      

    subject = forms.CharField(label = "Asunto", 
                              min_length=3,
                              max_length=100,
                              widget=forms.TextInput(
                                  attrs={'placeholder' : 'Asunto'}
                                  ))

    email = forms.EmailField(label = "Email",
                             min_length=3,
                             max_length=100,
                             widget=forms.EmailInput(
                                 attrs={'placeholder' : 'Email'}
                                 ))

    message = forms.CharField(label = "Mensaje",
                              min_length=10, 
                              max_length=1000,
                              widget=forms.Textarea(
                                  attrs={'placeholder' : 'Mensaje', 'style' : 'height: 100px;'}
                                  ))