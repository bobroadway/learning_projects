#!/usr/bin/python3.4
################################################################################
# Program:       Battleship                                                    #
# Created By:    Bo Broadway                                                   #
# Date:          12/13/2016                                                    #
################################################################################
from random import randint

########################################
# FUNCTIONS                            #
########################################

# Function to return a random row index.
def random_row(board):
    return randint(1, len(board))

# Function to return a random col index.
def random_col(board):
    return randint(1, len(board[0]))

# Function to print the game board.
def print_board(board):
    print('  1 2 3 4 5')
    i = 1
    for row in board:
        print(i ,' '.join(row))
        i += 1

########################################
# MAIN LINE                            #
########################################

# set up gameboard
board = []
for x in range(5):
    board.append(['O'] * 5)

print("Let's play Battleship!")
print_board(board)

ship_row = random_row(board)
ship_col = random_col(board)

print(ship_row)
print(ship_col)

for turn in range(1, 5):
    print('Turn', turn)
    guess_row = int(input("Guess Row:"))
    guess_col = int(input("Guess Col:"))
    if guess_row == ship_row and guess_col == ship_col:
        print("Congratulations! You sunk my battleship!")
        break
    else:
        if (guess_row < 1 or guess_row > 5) or (guess_col < 1 or guess_col > 5):
            print("Oops, that's not even in the ocean.")
        elif(board[guess_row][guess_col] == "X"):
            print("You guessed that one already.")
        else:
            print("You missed my battleship!")
            board[guess_row - 1][guess_col - 1] = "X"
        if turn == 4:
            print('Game Over')
            print(ship_row)
            print(ship_col)
        print_board(board)