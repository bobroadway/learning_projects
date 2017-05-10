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
    
    The __init__ method loops through the foods passed in to get totals for the 
    main attribute values of the foods, holds these values as attributes and 
    returns calculated attributes when needed.
    
    Note:
        When instantiating an object, do not include the `self` parameter. 
        
    Args:
        name  (str) : The name of the meal. 
        foods (`list` of :obj:`Food`) : A list of Foods.
        
    Attributes:
        name          str: The name of the meal. (Breakfast, Lunch, Dinner, Day).
        meal_price    float: The total retail cost of this meal. ex - 12.95
        size          float: The full size, in grams.
        servings      float: The number of servings for this meal to be divided into.
        fat           float: The amount of fat, in grams.
        carb          float: The amount of carbs, in grams. 
        protein       float: The amount of protein, in grams.
        fat_cal       int: Calories from fat. 
        carb_cal      int: Calories from carbohydrates. 
        protein_cal   int: Calories from protein. 
        total_cal     int: Total calories, in this meal. 
        fat_percent   int: Macro ratio of fat. 
        carb_percent  int: Macro ratio of carbohydrates. 
        protein_percent int: Macro ratio of protein.
        calories_per_dollar int: Total calories per dollar.
        fat_per_dollar int: Fat calories per dollar. 
        carb_per_dollar int: Carb calories per dollar. 
        protein_per_dollar int: Protein calories per dollar. 
        
        
    """
    def __init__(self, name, foods):
        self.__logger   = logging.getLogger('nutritional_value.{}'.format(__name__))
        
        self.name       = name
        self.price      = 0.0
        self.size       = 0.0
        self.servings   = 1   # default, only option, for now
        self.fat        = 0.0
        self.carb       = 0.0
        self.protein    = 0.0
        
        for food in foods:
            self.__logger.info('Adding Food:{} to meal.'.format(food.name))
            self.price += food.package_price
            self.size       += food.serving_size
            self.fat        += food.fat 
            self.carb       += food.carb 
            self.protein    += food.protein 

        self.__logger.info("New Meal, '{}', Created.".format(self.name))
        self.__logger.info(str(self))
        
    # Attributes Calculated from Foods
    @property
    def name(self):
        """ str: The name of the Meal. (Breakfast, Lunch, Dinner, Day) """
        return self._name
        
    @name.setter
    def name(self, name):
        self._name = name
        
    @property
    def price(self):
        """ float: The total retail cost of this meal. ex - 12.95 """
        return self._price
        
    @price.setter
    def price(self, price):
        self._price = price
        
    @property
    def size(self):
        """ float: The full size, in GRAMS. """
        return self._size
        
    @size.setter
    def size(self, size):
        self._size = size
        
    @property
    def servings(self):
        """ float: The number of servings for this meal to be divided into. """
        return self._servings
        
    @servings.setter
    def servings(self, servings):
        self._servings = servings
        
    @property
    def fat(self):
        """ float: The amount of fat, in grams. """
        return self._fat
        
    @fat.setter
    def fat(self, fat):
        self._fat = fat
        
    @property
    def carb(self):
        """ float: The amount of carbs, in grams. """
        return self._carb
        
    @carb.setter
    def carb(self, carb):
        self._carb = carb
        
    @property
    def protein(self):
        """ float: The amount of protein, in grams. """
        return self._protein
        
    @protein.setter
    def protein(self, protein):
        self._protein = protein
    
    # Calculated Attributes
    @property
    def serving_price(self):
        """ float: The float value of the price per serving. """
        return round((self.price / self.servings), 2)
        
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
        return self.calculate_macro_percentage(self.fat_cal)
    
    @property
    def carb_percent(self):
        """ int: Macro ratio of carb. """
        return self.calculate_macro_percentage(self.carb_cal)
    
    @property
    def protein_percent(self):
        """ int: Macro ratio of protein. """
        return self.calculate_macro_percentage(self.protein_cal)
        
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
        
    # Methods
    def calculate_macro_percentage(self, macro):
        """ Calculates the macro percentage of total calories.
        
        Args:
            macro (int): the *_cal variable for the macro in question.
            
        Returns:
            percentage (int): The macro's calorie percentage of total calories, 
                rounded to the nearest percent.
        """
        percentage = 0
        if self.total_cal > 0:
            percentage = int(round((macro / self.total_cal) * 100, 0))
        return percentage
        
    def __repr__(self):
        """ The string [repr]esenation of the object, for use in logging. """
        return '{}({})'.format(self.__class__.__name__, self.__dict__)