#!/usr/bin/python3.4
""" Nutritional Value

Purpose:
    Take information from a user regarding the food they ate or intend to eat, 
    return helpful information about that food, and build a meal containing the 
    foods created.
    
Programmer:
    Bo Broadway
    
Date:
    04/27/2017
    
This program will run with the command ./nutritional_value.py

Dependencies:
    Modules 
        classes/food.py
        classes/meal.py
        logger/init_logger.py

"""
import gc
import logging
from logger import init_logger
from classes.food import Food
from classes.meal import Meal

# set up logging
init_logger.setup()
logger = logging.getLogger('nutritional_value.{}'.format(__name__))

def clear():
    """ Clears the terminal window for a fresh viewing experience.
    
    Args:
        None
    """
    for i in range(30):
        print ('\n')

def displayGreeting():
    """ Displays the welcome message and banner of nutritional_value.py
    
    Args:
        None
    """
    clear()
    print('************************************************************')
    print('**   Welcome to                                           **')
    print('**    _   _       _        _ _   _                   _    **')
    print('**   | \ | |     | |      (_) | (_)                 | |   **')
    print('**   |  \| |_   _| |_ _ __ _| |_ _  ___  _ __   __ _| |   **')
    print("**   | . ` | | | | __| '__| | __| |/ _ \| '_ \ / _` | |   **")
    print('**   | |\  | |_| | |_| |  | | |_| | (_) | | | | (_| | |   **')
    print('**   \_| \_/\__,_|\__|_|  |_|\__|_|\___/|_| |_|\__,_|_|   **')
    print('**                       _   _       _                    **')
    print('**                      | | | |     | |                   **')
    print('**                      | | | | __ _| |_   _  ___         **')
    print('**                      | | | |/ _` | | | | |/ _ \        **')
    print('**                      \ \_/ / (_| | | |_| |  __/        **')
    print('**                       \___/ \__,_|_|\__,_|\___|        **')
    print('**                                                        **')
    print('************************************************************')
    
def prompt(question):
    """ Prompts the user a yes or no question (y/n), and returns a boolean based 
    on y or n.
    
    Args:
        question (str) : the yes or no question
    """
    user_response = ''
    
    while user_response not in ('y', 'n'):
        user_response = str(input('{} (y/n) '.format(question))).lower()
        
    return user_response == 'y'

def createFood():
    """ Creates a food object by prompting the user for the externally derived 
    attributes.
    
    Args:
        None
        
    Returns:
        food (:obj:`Food`): The newly created Food object.
    """
    name     = str(input('What is the name of the food? '))
    price    = float(input('Price? $'))
    servings = float(input('How many servings per container? '))
    fat      = float(input('How many grams of fat per serving? '))
    carb     = float(input('How many grams of carbs per serving? '))
    protein  = float(input('How many grams of protein per serving? '))
    food = Food(name, price, servings, fat, carb, protein)
    return food
    
def addToFoodsList(foods_list, new_food, servings):
    """ Takes the current foods list and appends a new meal_component onto it. 
    This meal_component is derived from the food to add, with refactored values 
    based on the amount of servings used.
    
    Args:
        foods_list (`list` of :obj:`Food`): The current list of foods.
        new_food (:obj:`Food`): The new Food object to be appended.
        servings (float): The number of servings of this food to be added to the
            meal.
            
    Returns:
        foods_list (`list` of :obj:`Food`): The updated list of Food objects.
    """
    name    = str(new_food.name)
    price   = float(new_food.pricePerServing * servings)
    fat     = float(new_food.fat * servings)
    carb    = float(new_food.carb * servings)
    protein = float(new_food.protein * servings)
    logger.info('Converting new_food to meal_component...')
    meal_component = Food(name, price, 1, fat, carb, protein)
    foods_list.append(meal_component)
    return foods_list
        
def displayFood(food):
    """ Full display of the Food object's attributes.
    
    Args:
        food (:obj: Food) - The Food object to display.
    """
    print('**Food Item***************************************')
    print('*')
    print('*  -- {} --'.format(food.name))
    print('*  Price per Serving: ${0:.2f}'.format(food.pricePerServing))
    print('*  Fat: {}g'.format(food.fat))
    print('*  Carbs: {}g'.format(food.carb))
    print('*  Protein: {}g'.format(food.protein))
    print('*  Calories: {}'.format(food.totalCal))
    print('*  Macro Ratio (Carb/Protein/Fat): {}/{}/{}'.format(food.carbPercent, food.proteinPercent, food.fatPercent))
    print('*')
    print('**************************************************')

def main():
    """ The Main method for nutritional_value.py """
    logger.info('Beginning Main Line.-----------------------------------------')
    foods = []
    displayGreeting()
    
    # user participation
    proceed = prompt('Would you like to create a new food?')
    
    # prompts for food so long as the user wishes to create foods
    while proceed:
        currentFood = createFood()
        displayFood(currentFood)
        # determine if this food should be added to the meal
        if prompt('Would you like to add {} to your meal?'.format(currentFood.name)):
            servings = float(input('How many servings will you be consuming? '))
            foods = addToFoodsList(foods, currentFood, servings)
        proceed = prompt('Would you like to create another food?')
    
    # display meal and exit; or if there is no meal, just exit    
    if len(foods) > 0:
        # TODO: Set meal to actual Meal object, call meal display method.
        meal = [food.name for food in foods]
        logger.info('Meal Created: {}'.format(meal))
        print('Enjoy your meal. {}'.format(meal))
    else:
        print('Goodbye.')

    # exit, clean up if needed
    logger.info('Program Exiting.\n\n\n')
    gc.collect()

# if this file is run as a script, launch the main method
if __name__ == '__main__': main()