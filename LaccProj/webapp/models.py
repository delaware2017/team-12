# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Nominee(models.Model):
    first_name = models.CharField(max_length=100, null=False, blank=False) #generates text box input for firstname
    last_name  = models.CharField(max_length=100, null=False, blank=False) #generates text box input for lastname
    email = models.CharField(max_length=100, null=False, blank=False) #generates text box for email
    phone = models.CharField(max_length=12, null=False, blank=False) #generates text box for phone number, limited to 12 characters
    gpa = models.IntegerField(default= 0, null=False ,blank=False) #generates text box to take an integer for GPA
    number_of_AP_courses = models.IntegerField(default= 0,null=False, blank=False) #generates text box to take an integer for # of AP courses
    Do_you_consider_yourself_hispanic = models.NullBooleanField(null=True) #generates drop down menu to select yes/no/unknown 

    athletics = models.BooleanField() #generates checkbox 

    #gpa_int = float(gpa)
     #if gpa_int >= 3.91:
     #    sum = 3
     #elif gpa_int >= 3.75:
      #   sum = 2
     #elif gpa_int >= 3.5:
     #    sum = 1
     #else:
      #   sum = 0
   # score = models.IntegerField(default= sum,null=False, blank=False)

    STEM = models.BooleanField()#generates checkbox

    arts = models.BooleanField()#generates checkbox


    community_Service = models.BooleanField()#generates checkbox


    personal_Statement = models.CharField(max_length=7500, null=False, blank=False) #generates text box for personal statement, limited to 7500 characters
    student_Accept = models.BooleanField() #generates checkbox
    Parent_or_Guardian_Name = models.CharField(max_length=50, null=False, blank=False) #generates text box for Parents/Guardians name
    Parent_or_guardian_accept = models.BooleanField() #generates checkbox

    def __str__(self):
        """this sets the default return for this object"""
        return self.first_name + ' ' + self.last_name
