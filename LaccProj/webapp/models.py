# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Nominee(models.Model):
    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name  = models.CharField(max_length=100, null=False, blank=False)
    email = models.CharField(max_length=100, null=False, blank=False)
    phone = models.CharField(max_length=12, null=False, blank=False)
    Do_you_consider_yourself_hispanic = models.NullBooleanField(null=True)
    athletics = models.BooleanField()
    if (athletics):
     certificates = models.CharField(max_length=100, null=False, blank=False)


    STEM = models.BooleanField()
    arts = models.BooleanField()
    community_service = models.BooleanField()
    personal_statement = models.CharField(max_length=7500, null=False, blank=False)
    student_accept = models.BooleanField()
    Parent_or_guardian_name = models.CharField(max_length=50, null=False, blank=False)
    Parent_or_guardian_accept = models.BooleanField()

    def __str__(self):
        """this sets the default return for this object"""
        return self.first_name + ' ' + self.last_name
