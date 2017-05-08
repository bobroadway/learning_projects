#!/usr/bin/python3.4
""" Class: Food.py

Purpose:
    This is the Food class for nutritional_value.py. It holds all information 
    regarding a single item of food, as well as includes methods used to process 
    the information.

Programmer:
    Bo Broadway

Date:
    04/21/2017
"""
import logging

class Food:
    """Represents a single food item.
    
    The __init__ method sets all externally derived variables from the arguments 
    passed in, uses calculate methods on any single variable that gets it's value 
    internally, and calls set methods on variables of the same category. ie Cals 
    and Percents.
    
    Note:
        When instantiating an object, do not include the `self` parameter. 
        
    Args:
        name          (str)   : The name of the Food. 
        package_price (float) : The float value of the price. ex - 12.95
        portion       (float) : The size of a single serving, in GRAMS.
        servings      (float) : The number of servings per container.
        fat           (int)   : The amount of fat per serving, in grams. 
        carb          (int)   : The amount of carbs per serving, in grams. 
        protein       (int)   : The amount of protein per serving, in grams.
        
    Attributes:
        name          (str)   : The name of the Food. 
        package_price (float) : The float value of the price. ex - 12.95
        portion       (float) : The size of a single serving, in GRAMS.
        servings      (float) : The number of servings per container.
        fat           (float) : The amount of fat per serving, in grams. 
        carb          (float) : The amount of carbs per serving, in grams. 
        protein       (float) : The amount of protein per serving, in grams.
        
        serving_price       (float) : The float value of the price per serving.
        total_cal           (int)   : Total calories, per serving.
        fat_cal             (int)   : Calories from fat, per serving. 
        carb_cal            (int)   : Calories from carbohydrates, per serving. 
        protein_cal         (int)   : Calories from protein, per serving. 
        package_cal         (int)   : Calories per package.
        fat_percent         (int)   : Macro ratio of fat. 
        carb_percent        (int)   : Macro ratio of carb. 
        protein_percent     (int)   : Macro ratio of protein.
        calories_per_dollar (int)   : Total calories per dollar.
        fat_per_dollar      (int)   : Fat calories per dollar.
        carb_per_dollar     (int)   : Carb calories per dollar.
        protein_per_dollar  (int)   : Protein calories per dollar.
        
    """
    def __init__(self, name, package_price, portion, servings, fat, carb, protein):
        self.logger          = logging.getLogger('nutritional_value.{}'.format(__name__))
        
        self.name            = name
        self.package_price   = package_price
        self.portion         = portion
        self.servings        = servings
        self.fat             = fat
        self.carb            = carb
        self.protein         = protein
        
        self.serving_price   = self.calculate_serving_price()
        
        self.set_cals()
        self.set_macro_ratio()
        self.set_dollar_values()
        
        self.package_cal     = self.calculate_package_cal()
        
        self.logger.info("New Food, '{}', Created.".format(self.name))
        self.logger.info(self.__repr__)
        
    def __repr__(self):
        """ The string [repr]esenation of the object, for use in logging. """
        return '{}({})'.format(self.__class__.__name__, self.__dict__)
        
    def set_cals(self):
        """ Sets the value for all *_cal variables.
        
        Args:
            None
        """
        self.fat_cal     = int(round((self.fat * 9), 0))
        self.carb_cal    = int(round((self.carb * 4), 0))
        self.protein_cal = int(round((self.protein * 4), 0))
        self.total_cal   = self.fat_cal + self.carb_cal + self.protein_cal
        
    def calculate_serving_price(self):
        """ Calculates the price per serving.
        
        Args:
            None
            
        Returns:
            serving_price (float): The price of the food per a single serving.
        """
        serving_price = round((self.package_price / self.servings), 2)
        return serving_price
        
    def calculate_package_cal(self):
        """ Calculates the total calories from the entire package.Calculates
        
        Args:
            None
            
        Returns:
            package_cal (int): The caloric value of the entire package.
        """
        package_cal = int(round((self.total_cal * self.servings), 0))
        return package_cal
        
    def calculate_percentage(self, macro):
        """ Calculates the macro percentage of total calories.
        
        Args:
            macro (int): the *_cal variable for the macro in question.
            
        Returns:
            percentage (int): The macro's calorie percentage of total calories, 
                rounded to the nearest percent.
        """
        if self.total_cal > 0:
            percentage = int(round((macro / self.total_cal) * 100, 0))
        else:
            percentage = 0
        return percentage
    
    def set_macro_ratio(self):
        """ Sets the value for all *_percent variables.
        
        Args:
            None
        """
        self.fat_percent     = self.calculate_percentage(self.fat_cal)
        self.carb_percent    = self.calculate_percentage(self.carb_cal)
        self.protein_percent = self.calculate_percentage(self.protein_cal)
        
    def set_dollar_values(self):
        """ Sets the amount of calories per dollar for total_cal, fat_cal, 
        carb_cal, and protein_cal.
        
        Args:
            None
        """
        self.calories_per_dollar = int(round(float(self.total_cal / self.serving_price), 0))
        self.fat_per_dollar      = int(round(float(self.fat_cal / self.serving_price), 0))
        self.carb_per_dollar     = int(round(float(self.carb_cal / self.serving_price), 0))
        self.protein_per_dollar  = int(round(float(self.protein_cal / self.serving_price), 0))