#!/usr/bin/python3.4
""" New Project: Food.py """
class Food:
    """ Represents a single food item """
    def __init__(self, name, price, servings, fat, carb, protein):
        self.name = name
        self.price = price
        self.servings = servings
        self.pricePerServing = self.calculatePricePerServing()
        self.fat = fat
        self.carb = carb
        self.protein = protein
        self.setCals()
        self.setMacroRatio()
        print("New Food, '{}', Created.".format(self.name))
        
    def setCals(self):
        self.fatCal = self.fat * 9
        self.carbCal = self.carb * 4
        self.proteinCal = self.protein * 4
        self.totalCal = self.fatCal + self.carbCal + self.proteinCal
        
    def calculatePricePerServing(self):
        pricePerServing = round((self.price / self.servings), 2)
        return pricePerServing
        
    def calculatePercentage(self, macro):
        precentage = int(round((macro / self.totalCal) * 100, 0))
        return precentage
    
    def setMacroRatio(self):
        self.fatPercent = self.calculatePercentage(self.fatCal)
        self.carbPercent = self.calculatePercentage(self.carbCal)
        self.proteinPercent = self.calculatePercentage(self.proteinCal)
        
    def displayBasics(self):
        print("-- {} --".format(self.name))
        print("Price per Serving: ${}".format(self.pricePerServing))
        print("Fat: {}g".format(self.fat))
        print("Carbs: {}g".format(self.carb))
        print("Protein: {}g".format(self.protein))
        
    def displayExpanded(self):
        self.displayBasics()
        print("Calories: {}".format(self.totalCal))
        print("Macro Ratio (Carb/Protein/Fat): {}/{}/{}".format(self.carbPercent, self.proteinPercent, self.fatPercent))
        
## Main ##
print("Welcome to Nutritional Value!")
name = str(input("What is the name of the food? "))
price = round(float(input("Price? $")), 2)
servings = round(float(input("How many servings per container? ")), 1)
fat = int(input("How many grams of fat per serving? "))
carb = int(input("How many grams of carbs per serving? "))
protein = int(input("How many grams of protein per serving? "))
print("Thank you for the information!")

food = Food(name, price, servings, fat, carb, protein)
food.displayExpanded()