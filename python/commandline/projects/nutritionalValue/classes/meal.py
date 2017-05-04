#!/usr/bin/python3.4
""" Class: Meal.py

Purpose:
    This is the Meal class for nutritional_value.py. It holds all information 
    regarding a collection of food items, as well as includes methods used to 
    process the information.

Programmer:
    Bo Broadway

Date:
    05/01/2017
"""
import logging
from classes.food import Food

class Meal:
    """Represents a Meal, which is a collection of Food items, with the addition 
    of its own unique stats based on the meal as a whole.
    
    The __init__ method sets all externally derived variables from the arguments 
    passed in, uses calculate methods on any single variable that gets it's value 
    internally, and calls set methods on variables of the same category. ie Cals 
    and Percents.
    
    Note:
        When instantiating an object, do not include the `self` parameter. 
        
    Args:
        
    Attributes:
        
    """
    def __init__(self, foods):
        self.foods = foods