from math import sin,cos
try:
    a=input()
    a=a.lower()
    
    if len(a)>200:
        len(1)
    blya = False
    num = ["0","1","2","3","4","5","6","7","8","9"]
    a = list(a)
    for h in range(len(a)):
        if h>0:
            if a[h] == ".":
                blya = True
            if blya == True:
                if a[h-1] in num:
                    blya = False
                    continue
                else:
                    a[h] = " "
                    blya = False
    if a[0]=='.':
        a[0] = ""
    lp = a
    a = ""
    for h in range(len(lp)):
        a = a + lp[h]
    g=str(eval(a))
    if g=='<built-in function cos>':
        len(1)
    if g=='<built-in function sin>':
        len(1)
    g=float(g)
    b=['+','-','/','*']
    for i in range(len(a)):
        if (a[i] in b) and (a[i+1] in b):
            len(1)  
    if g == a + ".0" or g == a:
        len(1)
    x = []
    print(round(g, 6))
except:
    print("Error")