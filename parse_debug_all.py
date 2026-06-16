# Let's inspect page2_left.txt, page3_left.txt, page3_right.txt, page4_right.txt which contain Set 1 Solutions.
# Let's print out lines containing "Ans." or "Sol." to see how they are formatted exactly.
import re

def print_ans_lines(filename):
    print(f"=== {filename} ===")
    with open(filename) as f:
        lines = f.readlines()
    for i, line in enumerate(lines):
        if 'ans' in line.lower() or 'sol' in line.lower() or re.match(r'^\s*S\d+\b', line):
            # Print index, line and next 2 lines
            context = "".join(lines[i:i+4])
            print(f"Line {i}:\n{context}---")

print_ans_lines('page2_left.txt')
print_ans_lines('page3_left.txt')
print_ans_lines('page3_right.txt')

