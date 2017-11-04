# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.core.urlresolvers import reverse
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.db.models import Count

from django.contrib.auth.models import User
from webapp.models import webapp


def index(request):
    webapp_by_user = User.objects.annotate(num_todos=Count('todo'))
    context = {
        'webapp_by_user': webapp_by_user
    }
    return render(request, "webapp/index.html", context)
