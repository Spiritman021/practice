import re

text = open('page1_left.txt').read() + "\n" + open('page1_right.txt').read() + "\n" + open('page2_right.txt').read()

# Let's write a python script that will clean the OCR text of Set 1 questions
# and output them with their original line-numbers if any, and clean them.
# Let's see all lines containing "Q" in this text
for line in text.split('\n'):
    if re.match(r'^\s*Q\d+', line) or re.match(r'^\s*\d+\.', line):
        print(line[:120])
