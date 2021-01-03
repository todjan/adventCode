import re
with open('2nd/input.txt', 'r') as f:
    data = f.readlines()

count = 0
for line in data:
    text = re.search('(\\d+)-(\\d+) (.): (.*)' , line)
    first_number = text.group(1)
    second_number = text.group(2)
    letter_condition = text.group(3)
    pwd = text.group(4)
    
    if int(first_number) <= int(second_number):
        result = re.search('['+letter_condition+']{'+first_number+','+second_number+'}',pwd)
        if result != None:
            count += 1
            print(result.group(0))


print(count)