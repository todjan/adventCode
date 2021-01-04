import re
with open('2nd/input.txt', 'r') as f:
    data = f.readlines()

count = 0
for line in data:
    count_match_pos_letter = 0
    text = re.search('(\\d+)-(\\d+) (.): (.*)' , line)
    first_number = int(text.group(1))
    second_number = int(text.group(2))
    letter_condition = text.group(3)
    pwd = text.group(4)
    
    p = re.compile('['+letter_condition+']')
    for m in p.finditer(pwd):
        if m.start() + 1 == first_number or m.start() + 1 == second_number:
            count_match_pos_letter +=  1
    if count_match_pos_letter == 1:
        count += 1

print(count)