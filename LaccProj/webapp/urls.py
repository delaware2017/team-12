from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    #url(r'^todos/$', views.webapp_list.as_view(), name='_list'),
    #url(r'^todo/create/$', views.webapp_create.as_view(), name='todo_create')
]