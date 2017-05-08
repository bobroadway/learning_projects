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

def display_greeting():
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
    print('**                                       by Bo Broadway   **')
    print('************************************************************')
    
def prompt(question):
    """ Prompts the user a yes or no question (y/n), and returns a boolean based 
    on y or n.
    
    Args:
        question (str): The yes or no question.
    """
    user_response = None
    
    while user_response not in ('y', 'n'):
        user_response = str(input('{} (y/n) '.format(question))).lower()
        
    return user_response == 'y'

def create_food():
    """ Creates a food object by prompting the user for the externally derived 
    attributes.
    
    Args:
        None
        
    Returns:
        food (:obj:`Food`): The newly created Food object.
    """
    name          = str(input('What is the name of the food? '))
    package_price = round(float(input('Price? $')), 2)
    serving_size  = round(float(input('What is a single serving size, in grams? ')), 1)
    servings      = round(float(input('How many servings per container? ')), 1)
    fat           = round(float(input('How many grams of fat per serving? ')), 1)
    carb          = round(float(input('How many grams of carbs per serving? ')), 1)
    protein       = round(float(input('How many grams of protein per serving? ')), 1)
    logger.info('Creating new food...')
    food = Food(name, package_price, serving_size, servings, fat, carb, protein)
    return food
    
def add_to_foods_list(foods_list, new_food, servings):
    """ Takes the current foods list and appends a new meal_component onto it. 
    This meal_component is derived from the food to add, with refactored values 
    based on the amount of servings used.
    
    Args:
        foods_list (`list` of :obj:`Food`): The current list of foods.
        new_food (:obj:`Food`): The new Food object to be appended.
        servings (float): The number of servings of this food to be added to the
            meal.
    
    Note:
        When creating the meal_component Food, the Food.servings value will always 
        be passed in as an int:`1`. Assignment of a Food.servings value is avoided 
        as the number of servings for this meal_component is passed in through a 
        `servings` variable.
        
    Returns:
        foods_list (`list` of :obj:`Food`): The updated list of Food objects.
    """
    name          = str(new_food.name)
    package_price = round(float(new_food.serving_price * servings), 2)
    serving_size  = round(float(new_food.serving_size * servings), 1)
    fat           = round(float(new_food.fat * servings), 1)
    carb          = round(float(new_food.carb * servings), 1)
    protein       = round(float(new_food.protein * servings), 1)
    logger.info('Converting new_food to meal_component...')
    meal_component = Food(name, package_price, serving_size, 1, fat, carb, protein)
    foods_list.append(meal_component)
    logger.info('Food/meal_component added.')
    print('{} Added.'.format(meal_component.name))
        
def display_food(food):
    """ Full display of the Food object's attributes.
    
    Args:
        food (:obj: Food): The Food object to display.
    """
    print('**Food Item*************************************************')
    print('*')
    print('*  -- {} -- ({} Calories for the whole thing.)'.format(food.name, food.package_cal))
    print('*  Per Serving')
    print('*    Price: ${0:.2f}'.format(food.serving_price))
    print('*    Calories: {}'.format(food.total_cal))
    print('*    Macros: Fat: {}g, Carbs: {}g, Protein: {}g'.format(food.fat, food.carb, food.protein))
    print('*    Macro Ratio (Carb/Protein/Fat): {}/{}/{}'.format(food.carb_percent, food.protein_percent, food.fat_percent))
    print('*  Per Dollar')
    print('*    Total: {} cals'.format(food.calories_per_dollar))
    print('*          Fat: {} cals'.format(food.fat_per_dollar))
    print('*        Carbs: {} cals'.format(food.carb_per_dollar))
    print('*      Protein: {} cals'.format(food.protein_per_dollar))
    print('*')
    print('************************************************************')

def main():
    """ The Main method for nutritional_value.py """
    logger.info('Beginning Main Line...')
    foods = []
    display_greeting()
    
    # user participation
    proceed = prompt('Would you like to create a new food?')
    
    # prompts for food so long as the user wishes to create foods
    while proceed:
        current_food = create_food()
        display_food(current_food)
        # determine if this food should be added to the meal
        if prompt('Would you like to add {} to your meal?'.format(current_food.name)):
            servings = round(float(input('How many servings will you be consuming? ')), 2)
            add_to_foods_list(foods, current_food, servings)
        proceed = prompt('Would you like to create another food?')
    
    # display meal and exit; or if there is no meal, just exit    
    if len(foods) > 0:
        # TODO: Set meal to actual Meal object, call meal display method.
        meal = [food.name for food in foods]
        logger.info('Meal Created: {}'.format(meal))
        print('Enjoy your meal: {}'.format(meal))
    else:
        print('Goodbye.')

    # exit, clean up if needed
    logger.info('Program Exiting.\n')
    gc.collect()

# if this file is run as a script, launch the main method
if __name__ == '__main__': main()