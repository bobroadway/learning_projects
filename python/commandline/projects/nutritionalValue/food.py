#!/usr/bin/python3.4
""" New Project: Food.py """
class Food:
    """ Represents a single food item """
    def __init__(self):
        print("New Food Object Created")
        self.name = str(input("What is the name of the food? "))
        self.size = int(input("Size (in grams)? "))
        self.fat = int(input("How many grams of fat? "))
        self.carb = int(input("How many grams of carbs? "))
        self.protein = int(input("How many grams of protein? "))
        print("Thank you for the information!")
        print("------------------------------")
        
    def display(self):
        print(self.name)
        print("Serving Size: {} grams".format(self.size))
        print("Fat: {}g".format(self.fat))
        print("Carbs: {}g".format(self.carb))
        print("Protein: {}g".format(self.protein))
        
## Main ##
food = Food()
food.display()