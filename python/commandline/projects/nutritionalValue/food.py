#!/usr/bin/python3.4
"""Class: Food.py

Purpose:
    This is the Food class for nutritional_value.py. It holds all information 
    regarding a single item of food, as well as includes methods used to process 
    the information.

Programmer:
    Bo Broadway

Date:
    04/21/2017
"""
class Food:
    """Represents a single food item.
    
    The __init__ method sets all externally derived variables from the arguments 
    passed in, uses calculate methods on any single variable that gets it's value 
    internally, and calls set methods on variables of the same category. ie Cals 
    and Percents.
    
    Note:
        When intantiating an object, do not include the `self` parameter. 
        
    Args:
        name     (str)   : The name of the Food. 
        price    (float) : The float value of the price. ex - 12.95
        servings (float) : The number of servings per container.
        fat      (int)   : The amount of fat per serving, in grams. 
        carb     (int)   : The amount of carbs per serving, in grams. 
        protein  (int)   : The amount of protein per serving, in grams.
        
    Attributes:
        name     (str)   : The name of the Food. 
        price    (float) : The float value of the price. ex - 12.95
        servings (float) : The number of servings per container.
        fat      (int)   : The amount of fat per serving, in grams. 
        carb     (int)   : The amount of carbs per serving, in grams. 
        protein  (int)   : The amount of protein per serving, in grams.
        
        pricePerServing (float) : The float value of the price per serving. 
        fatCal          (int)   : Calories from fat, per serving. 
        carbCal         (int)   : Calories from carbohydrates, per serving. 
        proteinCal      (int)   : Calories from protein, per serving. 
        totalCal        (int)   : Total calories, per serving.
        fatPercent      (int)   : Macro ratio of fat. 
        carbPercent     (int)   : Macro ratio of carb. 
        proteinPercent  (int)   : Macro ratio of protein.
    """
    def __init__(self, name, price, servings, fat, carb, protein):
        self.name            = name
        self.price           = price
        self.servings        = servings
        self.pricePerServing = self.calculatePricePerServing()
        self.fat             = fat
        self.carb            = carb
        self.protein         = protein
        self.setCals()
        self.setMacroRatio()
        print("New Food, '{}', Created.".format(self.name))
        
    def setCals(self):
        """ Sets the value for all *Cal variables.
        
        Args:
            None
        """
        self.fatCal     = self.fat * 9
        self.carbCal    = self.carb * 4
        self.proteinCal = self.protein * 4
        self.totalCal   = self.fatCal + self.carbCal + self.proteinCal
        
    def calculatePricePerServing(self):
        """ Calculates the price per serving.
        
        Args:
            None
        """
        pricePerServing = round((self.price / self.servings), 2)
        return pricePerServing
        
    def calculatePercentage(self, macro):
        """ Calculates the macro percentage of total calories.
        
        Args:
            macro (int): the *Cal variable for the macro in question.
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
        
    def displayBasics(self):
        """ Basic display of externally received variables.
        
        Args:
            None
        """
        print("-- {} --".format(self.name))
        print("Price per Serving: ${}".format(self.pricePerServing))
        print("Fat: {}g".format(self.fat))
        print("Carbs: {}g".format(self.carb))
        print("Protein: {}g".format(self.protein))
        
    def displayExpanded(self):
        """ Full display of the Food object's attributes.
        
        Args:
            None
        """
        self.displayBasics()
        print("Calories: {}".format(self.totalCal))
        print("Macro Ratio (Carb/Protein/Fat): {}/{}/{}".format(self.carbPercent, self.proteinPercent, self.fatPercent))
