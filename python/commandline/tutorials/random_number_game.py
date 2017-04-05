#!/usr/bin/python3.4
################################################################################
# Program:       Random Number Game                                            #
# Created By:    Bo Broadway                                                   #
# Date:          04/05/2017                                                    #
################################################################################
import random

########################################
# DECLARE                              #
########################################

# CONSTANTS
COUNT_GENERATED = 5
LOSING_NUMBER = 5
FAREWELLS = [
    'Later, Number Bro! NumBro, if you will!'
  , 'Farewell, Milady. *tips fedora*'
  , 'Fine! Bye!'
  , 'Oh. Okay. I understand you must be busy. Another time...'
  , 'Phew! Finally!'
  , 'Kbye.'
]

# VARIABLES
play_again = 'y'
result = ''
farewell = ''

########################################
# FUNCTIONS                            #
########################################

def print_greeting():
    """Prints greeting and explanation to the console."""
    print('Lucky Numbers! {} numbers will be generated.'.format(COUNT_GENERATED))
    print('If one of them is a "{}", you lose!'.format(LOSING_NUMBER))

def get_numbers():
    """Places randomly generated numbers in a list, returns that list."""
    numbers = []
    count = 0
    while count < COUNT_GENERATED:
        number = random.randint(1, 6)
        numbers.append(number);
        print(number)
        count += 1
    return numbers

def get_result():
    """Checks if the losing number is found in the list, returns result_message."""
    result_message = ''
    if LOSING_NUMBER in get_numbers():
        result_message = 'Sorry, you lose!'
    else:
        result_message = 'You win!'
    return result_message
    
def prompt_play_again():
    """Prompts the user to play again, returns the 'y' or 'n' from the user."""
    play_again = ''
    while play_again not in ('y', 'n'):
        play_again = str(input('Play again? (y/n): ')).lower()
        
    return play_again
        
        
########################################
# MAIN LINE                            #
########################################

while play_again == 'y':
    # Display game and result, ask to play again.
    print_greeting()
    result = get_result()
    print(result)
    play_again = prompt_play_again()

farewell = FAREWELLS[random.randint(0, 5)]
print(farewell)