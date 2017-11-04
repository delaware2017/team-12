# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Nominee(models.Model):
    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name  = models.CharField(max_length=100, null=False, blank=False)
    email = models.CharField(max_length=100, null=False, blank=False)
    phone = models.CharField(max_length=12, null=False, blank=False)
    gpa = models.IntegerField(default= 0, null=False ,blank=False)
    number_of_AP_courses = models.IntegerField(default= 0,null=False, blank=False)
    Do_you_consider_yourself_hispanic = models.NullBooleanField(null=True)
<<<<<<< HEAD

=======
    athletics = models.BooleanField()

    if gpa >= 3.91:
        sum = 3
    elif gpa >= 3.75:
        sum = 2
    elif gpa >= 3.5:
        sum = 1
    else:
        sum = 0

    score = models.IntegerField(default= sum,null=False, blank=False)

    
>>>>>>> 7318f5f3a4a08ff7010d02637af45dc4e224bcbc
    #ath = athletics.
    if (athletics == True):
     certificates = models.CharField(max_length=100, null=False, blank=False)

<<<<<<< HEAD
<<<<<<< HEAD

=======

>>>>>>> b1ce259131a2d0e5493ec3dd5d37587b3397d001
=======

>>>>>>> 62555041329eef6c9851abd618e670d46f73b28c

    STEM = models.BooleanField()

    if (STEM == True):
        Any_Science_Projects_or_Awards_in_these_fields = models.CharField(max_length=200, null=False, blank=False)

    arts = models.BooleanField()

    #if(arts == True):
       # Visual_art = models.FileField.upload_to()
        #Performing_art = models.FileField.upload_to() #can be video or video link

    community_Service = models.BooleanField()

    if(community_Service == True):
        community_statement = models.CharField(max_length=200, null=False, blank=False)


    personal_Statement = models.CharField(max_length=7500, null=False, blank=False)
    #student_Accept = models.BooleanField()
    Parent_or_Guardian_Name = models.CharField(max_length=50, null=False, blank=False)
    Parent_or_Guardian_Accept = models.BooleanField()

    def __str__(self):
        """this sets the default return for this object"""
        return self.first_name + ' ' + self.last_name
<<<<<<< HEAD
=======










        
>>>>>>> 7318f5f3a4a08ff7010d02637af45dc4e224bcbc
