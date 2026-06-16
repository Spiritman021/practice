# Let's inspect solutions Set 2 (page5_left, page6_left, page6_right, page7_left, page7_right)
import re

def print_ans_lines(filename):
    print(f"=== {filename} ===")
    with open(filename) as f:
        lines = f.readlines()
    for i, line in enumerate(lines):
        if 'ans' in line.lower() or 'sol' in line.lower() or re.match(r'^\s*S\d+\b', line):
            context = "".join(lines[i:i+4])
            print(f"Line {i}:\n{context}---")

print_ans_lines('page5_left.txt')
print_ans_lines('page6_left.txt')
print_ans_lines('page6_right.txt')
print_ans_lines('page7_left.txt')
print_ans_lines('page7_right.txt')

