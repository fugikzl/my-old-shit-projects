a = input().split(" ")
for i in range(len(a)):
    a[i] = int(a[i])
b = []
c = ""
for i in range(a[0]):
    b.append(input())
for i in range(a[1]):
    c = c +input()
c = c.replace(":","")
c = c.replace(",","")
c = c.replace(";","")
c = c.replace(".","")
c = c.replace("!","")
c = c.replace("'","")
c = c.replace('"',"")
c = c.replace('?',"")
c = c.lower()
c = c.split(" ") 
s = 0 
m = 0
for i in range(a[0]): #b - slovar
    if b[i] in c:
        s = s + 1 #slovar

for i in range(len(c)): #c-essay
    if c[i] in b:
        m = m + 1 #essay

if s == len(b) and m == len(c):
    print("Everything is going to be OK.")
elif len(c) > m:
    print("Some words from the text are unknown.")
elif len(b) > s:
    print("The usage of the vocabulary is not perfect.")
        
        




   