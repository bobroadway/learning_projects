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
        self.setCals()
        self.setMacroRatio()
        
    def setCals(self):
        self.fatCal = self.fat * 9
        self.carbCal = self.carb * 4
        self.proteinCal = self.protein * 4
        self.totalCal = self.fatCal + self.carbCal + self.proteinCal
        
    def getPercentage(self, macro):
        precentage = round((macro / self.totalCal), 2) * 10
        return precentage
    
    def setMacroRatio(self):
        self.fatPercent = self.getPercentage(self.fatCal)
        self.carbPercent = self.getPercentage(self.carbCal)
        self.proteinPercent = self.getPercentage(self.proteinCal)
        
    def displayBasics(self):
        print(self.name)
        print("Serving Size: {} grams".format(self.size))
        print("Fat: {}g".format(self.fat))
        print("Carbs: {}g".format(self.carb))
        print("Protein: {}g".format(self.protein))
        
    def displayExpanded(self):
        self.displayBasics()
        print("Total Calories: {}".format(self.totalCal))
        print("Macro Ratio (Carb/Protein/Fat): {}/{}/{}".format(self.carbPercent, self.proteinPercent, self.fatPercent))
        
## Main ##
food = Food()
food.displayExpanded()