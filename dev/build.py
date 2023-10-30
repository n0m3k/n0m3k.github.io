import os

root_directory = '../../'

search_string = 'hans'
replacement_string = 'bob'

def replace_in_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        content = content.replace(search_string, replacement_string)
        with open(file_path, 'w') as file:
            file.write(content)
        print(f'Replaced in: {file_path}')
    except Exception as e:
        print(f'Error in file {file_path}: {e}')

# Walk through the directory tree
for directory_path, _, file_names in os.walk(root_directory):
    for file_name in file_names:
        if file_name == 'TODO':
            file_path = os.path.join(directory_path, file_name)
            if os.path.isfile(file_path):
                replace_in_file(file_path)

