# Let's print out lines around Q32 to Q42 in page2_right.txt
with open('page2_right.txt') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if '83:' in line or 'Q9!' in line or 'Q42' in line or '34.' in line or '35.' in line:
        print(f"=== Context of line {idx} ===")
        print("".join(lines[max(0, idx-5):min(len(lines), idx+10)]))
