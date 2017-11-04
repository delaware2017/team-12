# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Nominee(models.Model):
    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name  = models.CharField(max_length=100, null=False, blank=False)
    email = models.CharField(max_length=100, null=False, blank=False)
    phone = models.IntegerField(null=False, blank=False)
    hispanic = models.BooleanField()
    athletics = models.BooleanField()
    stem = models.BooleanField()
    arts = models.BooleanField()
    community = models.BooleanField()

    def __str__(self):
        """this sets the default return for this object"""
        return self.first_name + ' ' + self.last_name
