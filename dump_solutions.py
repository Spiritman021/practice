# Dump Solutions from page2_left.txt, page3_left.txt, page3_right.txt, page4_right.txt (Set 1)
# and page5_left.txt, page6_left.txt, page6_right.txt, page7_left.txt, page7_right.txt (Set 2)

def print_clean_sols(filename, set_num):
    print(f"\n==================== SET {set_num} SOLUTIONS FROM {filename} ====================")
    with open(filename) as f:
        content = f.read()
    print(content)

print_clean_sols('page2_left.txt', 1)
print_clean_sols('page3_left.txt', 1)
print_clean_sols('page3_right.txt', 1)
print_clean_sols('page4_right.txt', 1)

