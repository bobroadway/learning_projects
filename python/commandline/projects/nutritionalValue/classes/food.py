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
        name     (str)   : The name of the Food. 
        price    (float) : The float value of the price. ex - 12.95
        portion  (float) : The size of a single serving, in GRAMS.
        servings (float) : The number of servings per container.
        fat      (int)   : The amount of fat per serving, in grams. 
        carb     (int)   : The amount of carbs per serving, in grams. 
        protein  (int)   : The amount of protein per serving, in grams.
        
    Attributes:
        name     (str)   : The name of the Food. 
        price    (float) : The float value of the price. ex - 12.95
        portion  (float) : The size of a single serving, in GRAMS.
        servings (float) : The number of servings per container.
        fat      (float) : The amount of fat per serving, in grams. 
        carb     (float) : The amount of carbs per serving, in grams. 
        protein  (float) : The amount of protein per serving, in grams.
        
        pricePerServing   (float) : The float value of the price per serving. 
        fatCal            (int)   : Calories from fat, per serving. 
        carbCal           (int)   : Calories from carbohydrates, per serving. 
        proteinCal        (int)   : Calories from protein, per serving. 
        totalCal          (int)   : Total calories, per serving.
        fatPercent        (int)   : Macro ratio of fat. 
        carbPercent       (int)   : Macro ratio of carb. 
        proteinPercent    (int)   : Macro ratio of protein.
        caloriesPerDollar (int)   : Total calories per dollar.
        fatPerDollar      (int)   : Fat calories per dollar.
        carbPerDollar     (int)   : Carb calories per dollar.
        proteinPerDollar  (int)   : Protein calories per dollar.
        
    """
    def __init__(self, name, price, portion, servings, fat, carb, protein):
        self.logger          = logging.getLogger('nutritional_value.{}'.format(__name__))
        self.name            = name
        self.price           = price
        self.portion         = portion
        self.servings        = servings
        self.fat             = fat
        self.carb            = carb
        self.protein         = protein
        self.pricePerServing = self.calculatePricePerServing()
        self.setCals()
        self.setMacroRatio()
        self.setDollarValues()
        self.logger.info("New Food, '{}', Created.".format(self.name))
        self.logger.info(self.__repr__)
        
    def __repr__(self):
        """ The string [repr]esenation of the object, for use in logging. """
        return '{}({})'.format(self.__class__.__name__, self.__dict__)
        
    def setCals(self):
        """ Sets the value for all *Cal variables.
        
        Args:
            None
        """
        self.fatCal     = int(round((self.fat * 9), 0))
        self.carbCal    = int(round((self.carb * 4), 0))
        self.proteinCal = int(round((self.protein * 4), 0))
        self.totalCal   = self.fatCal + self.carbCal + self.proteinCal
        
    def calculatePricePerServing(self):
        """ Calculates the price per serving.
        
        Args:
            None
            
        Returns:
            pricePerServing (float): The price of the food per a single serving.
        """
        pricePerServing = round((self.price / self.servings), 2)
        return pricePerServing
        
    def calculatePercentage(self, macro):
        """ Calculates the macro percentage of total calories.
        
        Args:
            macro (int): the *Cal variable for the macro in question.
            
        Returns:
            percentage (int): The macro's calorie percentage of total calories, 
                rounded to the nearest percent.
        """
        precentage = int(round((macro / self.totalCal) * 100, 0))
        return precentage
    
    def setMacroRatio(self):
        """ Sets the value for all *Percent variables.
        
        Args:
            None
        """
        self.fatPercent     = self.calculatePercentage(self.fatCal)
        self.carbPercent    = self.calculatePercentage(self.carbCal)
        self.proteinPercent = self.calculatePercentage(self.proteinCal)
        
    def setDollarValues(self):
        """ Sets the amount of calories per dollar for totalCal, fatCal, 
        carbCal, and proteinCal.
        
        Args:
            None
        """
        self.caloriesPerDollar = int(round(float(self.totalCal / self.pricePerServing), 0))
        self.fatPerDollar      = int(round(float(self.fatCal / self.pricePerServing), 0))
        self.carbPerDollar     = int(round(float(self.carbCal / self.pricePerServing), 0))
        self.proteinPerDollar  = int(round(float(self.proteinCal / self.pricePerServing), 0))