import random
import string

def generate_random_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

# Generate password
secure_password = generate_random_password()
print("Password acak 12 digit:", secure_password)
