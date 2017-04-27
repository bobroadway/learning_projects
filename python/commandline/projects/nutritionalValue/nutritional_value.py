#!/usr/bin/python3.4
""" Nutritional Value

Purpose:
    Take information from a user regarding the food they ate or intend to eat, 
    and return helpful information about that food.
    
Programmer:
    Bo Broadway
    
Date:
    04/27/2017
    
This program will run with the command ./nutritional_value.py

Dependencies:
    Classes 
        Food.py
        Meal.py

"""
from food import Food

## Main ##
print("Welcome to Nutritional Value!")
name     = str(input("What is the name of the food? "))
price    = float(input("Price? $"))
servings = float(input("How many servings per container? "))
fat      = int(input("How many grams of fat per serving? "))
carb     = int(input("How many grams of carbs per serving? "))
protein  = int(input("How many grams of protein per serving? "))
print("Thank you for the information!")

food = Food(name, price, servings, fat, carb, protein)
food.displayExpanded()