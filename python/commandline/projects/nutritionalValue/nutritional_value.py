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
import logging
from logger import init_logger
from datetime import date

from classes.food import Food

# set up logging
init_logger.setup()
logger = logging.getLogger("nutritional_value")

## Main ##
logger.info("Beginning Main Line.")
print("****************************************")
print("**   Welcome to Nutritional Value!    **")
print("****************************************")
name     = str(input("What is the name of the food? "))
price    = float(input("Price? $"))
servings = float(input("How many servings per container? "))
fat      = float(input("How many grams of fat per serving? "))
carb     = float(input("How many grams of carbs per serving? "))
protein  = float(input("How many grams of protein per serving? "))
print("****************************************")
print("Thank you for the information!")
print(" ")

logger.info("Creating Food.")
food = Food(name, price, servings, fat, carb, protein)
food.commandlineDisplay()

logger.info("Program Exiting.")