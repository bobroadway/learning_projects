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
        self.__logger         = logging.getLogger('nutritional_value.{}'.format(__name__))
        
        self._name = name
        for food in foods:
            self.__logger.info('Adding Food:{} to meal.'.format(food.name))
            
        self.__logger.info("New Meal, '{}', Created.".format(self.name))
        self.__logger.info(str(self))
        
    # Attributes Calculated from Foods
    @property
    def name(self):
        """ str: The name of the Meal. """
        return self._name
        
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
        # if self.total_cal > 0:
        #     percentage = int(round((macro / self.total_cal) * 100, 0))
        return percentage
        
    def __repr__(self):
        """ The string [repr]esenation of the object, for use in logging. """
        return '{}({})'.format(self.__class__.__name__, self.__dict__)