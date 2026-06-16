def print_clean_sols(filename, set_num):
    print(f"\n==================== SET {set_num} SOLUTIONS FROM {filename} ====================")
    with open(filename) as f:
        content = f.read()
    print(content)

print_clean_sols('page5_left.txt', 2)
print_clean_sols('page6_left.txt', 2)
print_clean_sols('page6_right.txt', 2)
print_clean_sols('page7_left.txt', 2)
print_clean_sols('page7_right.txt', 2)
