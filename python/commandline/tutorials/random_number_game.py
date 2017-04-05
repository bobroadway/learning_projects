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

# function to pring the greeting
#   returns null
def print_greeting():
    print('Lucky Numbers! {} numbers will be generated.'.format(COUNT_GENERATED))
    print('If one of them is a "{}", you lose!'.format(LOSING_NUMBER))

# function to get the list of random numbers
#   returns numbers: list of randomly generated numbers
def get_numbers():
    numbers = []
    count = 0
    while count < COUNT_GENERATED:
        number = random.randint(1, 6)
        numbers.append(number);
        print(number)
        count += 1
        
    return numbers

# function to retrieve the results of "playing the game"
#   returns result_message: string indicating if the player won or lost
def get_result():
    result_message = ''
    if LOSING_NUMBER in get_numbers():
        result_message = 'Sorry, you lose!'
    else:
        result_message = 'You win!'
        
    return result_message
    
# function to determine if the user would like to play again
#   returns play_again: 'y' or 'n' indicated if the user would like to play again
def prompt_play_again():
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