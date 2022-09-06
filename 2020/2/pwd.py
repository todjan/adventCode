import re
with open('2nd/input.txt', 'r') as f:
    data = f.readlines()

count = 0
for line in data:
    text = re.search('(\\d+)-(\\d+) (.): (.*)' , line)
    first_number = int(text.group(1))
    second_number = int(text.group(2))
    letter_condition = text.group(3)
    pwd = text.group(4)
    
    if first_number <= second_number:
        result = re.findall('['+letter_condition+']',pwd)
        matches = len(result)
        if matches >= first_number and matches <= second_number:
            count += 1

print(count)