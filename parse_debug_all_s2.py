import re

text = open('page4_left.txt').read() + "\n" + open('page4_right.txt').read() + "\n" + open('page5_left.txt').read() + "\n" + open('page5_right.txt').read()

print("Checking Set 2 Questions lines:")
for i, line in enumerate(text.split('\n')):
    if re.search(r'^\s*(?:Q\d+|\d+\.)', line):
        print(f"L{i}: {line[:100]}")
