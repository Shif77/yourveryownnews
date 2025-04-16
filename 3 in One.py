print("Welcome To 3 in ! App\n")

input1 = input("Press Ok to Start the first game!\n")

print("First Game is couple name maker!")

name1 = input("What is your nickname?\n")
name2 = input("What is your love ones nickname?\n")

print("Your couple name is: " + name1 + " " + name2)

input2 = input(
    "That's Funny! Right? ]\n Press Ok to Start the second game! \n")

print("The Second game is BMI Calculator")

height = float(input("What is your height? :\n"))
weight = float(input("What is your weight? :\n"))

result = weight / height**2
rounded_result = round(result, 2)
print("Your BMI is: " + str(rounded_result))

print("Now We are in the Final Game which is Tip Calculator!")

person = input("How many Person to split?\n")
bill = input("What was the Total Bill? \n")
tip = input("What percent of tip you wanna give as tip? 10, 12 or 15? : ")

total_with_tip = int(bill) * int(tip) / 100 + int(bill)
per_person = int(total_with_tip) / int(person)
rounded_per_person = round(per_person, 2)

print("Your total Bill is: " + str(total_with_tip) + " " + "Taka " +
      "& Every Person should pay:  " + str(rounded_per_person) + " Taka\n"
      "Thank You")
