print("Welcome To The Family Gathering")
input("Press Ok for further Proceedings \n")

print("You and your cousins are Chilling together. You decided to have some pizza. \nSo First Game name is Pizza Order\n")
input("Do you want to order some Pizza? If yes then Press Ok\n")

size = input("Which Size Pizza do you want? S, M, L or XL : ")
add = input("Do you want pepperoni? Y or N : ")
xtra = input("Do you want extra cheese?  Y or N : ")

bill = 0

if size == "S":
    bill += 10
elif size == "M":
    bill += 12
elif size == "L":
    bill += 15
elif size == "XL":
    bill += 20
else:
    print("Please put valid Size")

if add == "Y":
    bill += 3

if xtra == "Y":
    bill += 1

print(f"Your Total Bill is $ {bill}")

input("Press Start To Go Further ")

print("The Pizza was Superb. Now One of your cousins proposed to go for a RollerCoaster ride")
input("If You want to Go for a ride press Start: \n")

print("You guys went out for the Ride. But For the ride you have to go through a Scanning Process.Are you Ready for That?")
input("If you are ready press Start")

height = float(input("Enter Your Height (in meters): "))
weight = float(input("Enter your Weight (in kg): "))
age = int(input("What's Your Age? "))

bill2 = 0
result = weight / (height ** 2)

if 18.5 <= result <= 25:
    print("You Can Ride")
else:
    print("You couldn't pass the scanning! You can't Ride. Better Luck Next Time.")

if age <= 12:
    bill2 += 5
elif age < 40:
    bill2 += 15
elif 40 <= age <= 55:
    bill2 += 0
    print("Congrats! We are giving away free tickets for those going through midlife crisis!")
else:
    bill2 += 20

photo = input("Do you want a photo taken with the Ride? Press Y or N: \n")

if photo == "Y":
    bill2 += 3

print(f"Your Total Bill is $ {bill2}")

input("Press Start for Start Riding")

print("That was one hell of a ride! \n Now you guys are heading back home")

input("Press Ok for further Proceedings: ")
print("Unfortunately, you got lost while heading home and somehow ended up at a river. You found a letter containing information about some treasures.")

consent = input("Do you want to hunt the treasure? Press Y or N: \n")

if consent == "Y":
       print('''
    *******************************************************************************
              |                   |                  |                     |
     _________|________________.=""_;=.______________|_____________________|_______
    |                   |  ,-"_,=""     `"=.|                  |
    |___________________|__"=._o`"-._        `"=.______________|___________________
              |                `"=._o`"=._      _`"=._                     |
     _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
    |                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
    |___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
              |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
     _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
    |                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
    |___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
    ____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
    /______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
    ____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
    /______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
    ____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
    /______/______/______/______/______/______/______/______/______/______/_____ /
    *******************************************************************************
    \n WELCOME TO TREASURE HUNT''')
else:
    print("You were lost and couldn't find your way back home! \nGAME OVER")

choice = input("You want to Go Right, Left or Wait? \n")

if choice == "Right":
    first = input("You saw a house with three colored doors: Red, Green, and Yellow. Which door will you choose? \n")
    if first == "Red":
        print("The room is full of fire! You died! Better luck next time.")
    elif first == "Green":
        second = input("You saw two boxes: one is steel, and one is made of wood. Which one will you choose? ")
        if second == "Steel":
            print("There is a snake in that box! The snake bit you! Better luck next time.")
        else:
            print("There is a time bomb in the box. The bomb exploded when you opened it! Better luck next time.")
    else:
        print("There is a lion in the room! The lion killed you! Better luck next time.")
elif choice == "Left":
    third = input("You faced a group of dacoits! Do you want to fight them or run back? \n")
    if third == "Fight":
        print("They were many and you were alone! They killed you! Better luck next time.")
    else:
        print("You were running back, but unfortunately, they caught you and killed you! Better luck next time.")
elif choice == "Wait":
    fourth = input("You waited, and a boat came! The boatman doesn't seem good! Will you trust him and take the boat or swim across? \n")
    if fourth == "Swim":
        print("You were swimming, but the river was full of crocodiles! They killed you! Better luck next time.")
    else:
        fifth = input("The boatman safely took you to an island! Do you want to explore the island or return back? \n")
        if fifth == "Return":
            print("While returning, the boat sank due to leakage! You can't swim, so you died! Better luck next time.")
        else:
            sixth = input("You started to explore! You see some upper sand! Do you want to go inside the forest or dig the sand? \n")
            if sixth == "Dig":
                print("Congratulations! You found the treasure! Take your cash and go home.")
            else:
                print("There were tribals, and they don't allow outsiders! They killed you! Better luck next time.")
else:
    print("You did nothing! Game over.")
