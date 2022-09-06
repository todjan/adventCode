with open('input.txt', 'r') as f:
    data = f.readlines()
done = False

for line in data:
    for otherline in data:
        for thirdline in data:
            if int(line.replace('\n','')) + int(otherline.replace('\n','')) + int(thirdline.replace('\n','')) == 2020 and line != otherline and line != thirdline and thirdline != otherline:
                print('done number '+line.replace('\n','') + ' + number ' + otherline.replace('\n','') + ' + number ' + thirdline.replace('\n',''))
                print('product is '+ str(int(line.replace('\n',''))*int(otherline.replace('\n',''))*int(thirdline.replace('\n',''))))
                done = True
                break
        if done:
            break
    if done:
        break

print('bye')