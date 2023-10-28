import os

# Define the directory to start the search
root_directory = './'

# Define the string to search for and the file to replace it with
search_string = 'hans'
replacement_file = 'replacement.txt'  # File containing the replacement text

# Function to replace the search string with the content of the replacement file
def replace_in_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        with open(replacement_file, 'r') as replace_file:
            replacement_content = replace_file.read()
        content = content.replace(search_string, replacement_content)
        with open(file_path, 'w') as file:
            file.write(content)
        print(f'Replaced in: {file_path}')
    except Exception as e:
        print(f'Error in file {file_path}: {e}')

# Walk through the directory tree
for directory_path, _, file_names in os.walk(root_directory):
    for file_name in file_names:
        file_path = os.path.join(directory_path, file_name)
        if os.path.isfile(file_path):
            replace_in_file(file_path)
