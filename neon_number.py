def is_neon(number):
    square = number * number
    
    sum_of_digits = 0
    for digit in str(square):
        sum_of_digits += int(digit)
        
    # if else:
    if sum_of_digits == number:
        return True
    else:
        return False

try:
    num_to_check = int(input("Enter a number to check: "))
    if is_neon(num_to_check):
        print(f"{num_to_check} is a neon number.")
    else:
        print(f"{num_to_check} is not a neon number.")
except ValueError:
    print("Invalid input. Please enter an integer.")
