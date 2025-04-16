print("The first Game is Love Calculator")
input("Press Start to proceed \n")
name1= input("What is Your name? ")
name2 = input("What is your Girlfriends Name? \n")

combine = name1 + name2
lower = combine.lower()

t = lower.count("t")
r = lower.count("r")
u = lower.count("u")
e = lower.count("e")

true = t + r + u + e

l = lower.count("l")
o = lower.count("o")
v = lower.count("v")
e = lower.count("e")

love = l + o + v + e 

score = int(str(true) + str(love))
print(score)
