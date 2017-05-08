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
        serving_size       (float) : The size of a single serving, in GRAMS.
        servings      (float) : The number of servings per package.
        fat           (int)   : The amount of fat per serving, in grams. 
        carb          (int)   : The amount of carbs per serving, in grams. 
        protein       (int)   : The amount of protein per serving, in grams.
        
    Attributes:
        See Properties.
        
    """
    def __init__(self, name, package_price, serving_size, servings, fat, carb, protein):
        self.__logger          = logging.getLogger('nutritional_value.{}'.format(__name__))
        
        self._name            = name
        self._package_price   = package_price
        self._serving_size    = serving_size
        self._servings        = servings
        self._fat             = fat
        self._carb            = carb
        self._protein         = protein
        
        self.__logger.info("New Food, '{}', Created.".format(self.name))
        self.__logger.info(self.__repr__)
     
    # Externally Derived Attributes    
    @property
    def name(self):
        """ str: The name of the Food. """
        return self._name
        
    @name.setter
    def name(self, name):
        self._name = name
        
    @property
    def package_price(self):
        """ float: The float value of the price. ex - 12.95 """
        return self._package_price
        
    @package_price.setter
    def package_price(self, package_price):
        self._package_price = package_price
        
    @property
    def serving_size(self):
        """ float: The size of a single serving, in GRAMS. """
        return self._serving_size
        
    @serving_size.setter
    def serving_size(self, serving_size):
        self._serving_size = serving_size
        
    @property
    def servings(self):
        """ float: The number of servings per package. """
        return self._servings
        
    @servings.setter
    def servings(self, servings):
        self._servings = servings
        
    @property
    def fat(self):
        """ float: The amount of fat per serving, in grams. """
        return self._fat
        
    @fat.setter
    def fat(self, fat):
        self._fat = fat
        
    @property
    def carb(self):
        """ float: The amount of carbs per serving, in grams. """
        return self._carb
        
    @carb.setter
    def carb(self, carb):
        self._carb = carb
        
    @property
    def protein(self):
        """ float: The amount of protein per serving, in grams. """
        return self._protein
        
    @protein.setter
    def protein(self, protein):
        self._protein = protein
    
    # Caculated Attributes
    @property
    def serving_price(self):
        """ float: The float value of the price per serving. """
        return round((self.package_price / self.servings), 2)
        
    @property
    def fat_cal(self):
        """ int: Calories from fat, per serving. """
        return int(round((self.fat * 9), 0))
        
    @property
    def carb_cal(self):
        """ int: Calories from carbohydrates, per serving. """
        return int(round((self.carb * 4), 0))
        
    @property
    def protein_cal(self):
        """ int: Calories from protein, per serving. """
        return int(round((self.protein * 4), 0))
        
    @property
    def total_cal(self):
        """ int: Total calories, per serving. """
        return self.fat_cal + self.carb_cal + self.protein_cal
        
    @property
    def package_cal(self):
        """ int: Total calories per package. """
        return int(round((self.total_cal * self._servings), 0))
        
    @property
    def fat_percent(self):
        """ int: Macro ratio of fat. """
        return self.calculate_percentage(self.fat_cal)
    
    @property
    def carb_percent(self):
        """ int: Macro ratio of carb. """
        return self.calculate_percentage(self.carb_cal)
    
    @property
    def protein_percent(self):
        """ int: Macro ratio of protein. """
        return self.calculate_percentage(self.protein_cal)
        
    @property
    def calories_per_dollar(self):
        """ int: Total calories per dollar. """
        return int(round(float(self.total_cal / self.serving_price), 0))
        
    @property
    def fat_per_dollar(self):
        """ int: Fat calories per dollar. """
        return int(round(float(self.fat_cal / self.serving_price), 0))
        
    @property
    def carb_per_dollar(self):
        """ int: Carb calories per dollar. """
        return int(round(float(self.carb_cal / self.serving_price), 0))
        
    @property
    def protein_per_dollar(self):
        """ int: Protein calories per dollar. """
        return int(round(float(self.protein_cal / self.serving_price), 0))
        
    def __repr__(self):
        """ The string [repr]esenation of the object, for use in logging. """
        return '{}({})'.format(self.__class__.__name__, self.__dict__)
        
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