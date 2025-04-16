height = float(input("What is your height? \n"))
weight = float(input("WHat is your weight? \n"))

result = round(weight / height ** 2)


if result < 18.5:
    print(f"Uour BMI is {result}, You are UNDERWEIGHT")

elif result  < 25 :
    print(f"Your BMI is {result}, You have a normal Weight")

elif result < 30 :
    print(f"Your BMI is {result}, You are OverWEIGHT")

elif result < 35 :
    print(f"Your BMI is {result}, You are Obese")
    
else:
    print(f"Your BMI is {result}, Fuck")


