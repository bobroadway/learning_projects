#!/usr/bin/python3.4
"""Random Number Game

Purpose:
    Generate a list of random numbers. If the list contains a predetermined
    LOSING_NUMBER, the player loses. Otherwise, they win. Either way, they will
    be given the option to play again. If they choose 'y', the program begins 
    again. If they choose 'n', the program exits.

Programmer:
    Bo Broadway
    
Date:
    04/05/2017
    
This program will run with the command ./random_number_game.py.

Attributes:
    COUNT_GENERATED (int): The count of numbers to be generated in the list.
    LOSING_NUMBER (int): The predetermined losing number.
    FAREWELLS (`list` of `str`): A list of strings, one is chosen at random to 
        say goodbye when the program exits.
    play_again (str): flag to determine if the player would like to play again
        defaulted to 'y' so the program begins at least once.ArithmeticError
    result (str): the result of the game
    farewell (str): the chosen string to say goodbye when the program exits
    
"""
################################################################################
# Program:       Random Number Game                                            #
# Created By:    Bo Broadway                                                   #
# Date:          04/05/2017                                                    #
################################################################################
import random

# Constants
COUNT_GENERATED = 5
LOSING_NUMBER   = 5
FAREWELLS       = [
    'Later, Number Bro! NumBro, if you will!'
  , 'Farewell, Milady. *tips fedora*'
  , 'Fine! Bye!'
  , 'Oh. Okay. I understand you must be busy. Another time...'
  , 'Phew! Finally!'
  , 'Kbye.'
]

# Variables
play_again = 'y'
result     = ''
farewell   = ''

# Functions
def print_greeting():
    """Prints greeting and explanation to the console.
    
    Args:
        None
        
    Returns:
        None
    
    """
    print('Lucky Numbers! {} numbers will be generated.'.format(COUNT_GENERATED))
    print('If one of them is a "{}", you lose!'.format(LOSING_NUMBER))

def get_numbers():
    """Places randomly generated numbers in a list, returns that list.
    
    Args:
        None
        
    Returns:
        `list` of `int`: The list of randomly generated numbers.
    
    """
    numbers = []
    count = 0
    
    while count < COUNT_GENERATED:
        number = random.randint(1, 6)
        numbers.append(number);
        print(number)
        count += 1
        
    return numbers

def get_result(numbers):
    """Checks if the losing number is found in the list, returns result_message.
    
    Args:
        numbers(`list` of `numbers`): A list of numbers, used to check of the
            LOSING_NUMBER is present.
            
    Returns:
        string: The result message indicated if the player has won or lost.
    
    """
    result_message = ''
    
    if LOSING_NUMBER in numbers:
        result_message = 'Sorry, you lose!'
    else:
        result_message = 'You win!'
        
    return result_message
    
def prompt_play_again():
    """Prompts the user to play again, returns the 'y' or 'n' from the user.
    
    Args:
        None
        
    Returns:
        string: The 'y' or 'n' flag indicating if the player would like to play
            again.
    
    """
    play_again = ''
    
    while play_again not in ('y', 'n'):
        play_again = str(input('Play again? (y/n): ')).lower()
        
    return play_again


## Main Line ##

# play_again flag is defaulted to 'y' at the start, the user is prompted at the 
# end of the iteration to change the flag
while play_again == 'y':
    # Display game and result, ask to play again.
    print_greeting()
    result = get_result(get_numbers())
    print(result)
    play_again = prompt_play_again()

# program end, saying goodbye
farewell = FAREWELLS[random.randint(0, 5)]
print(farewell)