from django.views.generic.base import View
from django.shortcuts import render


class MainView(View):

    def get(self, request):
        return render(request, 'app_bin/index.html', {})
