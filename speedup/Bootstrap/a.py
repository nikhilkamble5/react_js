import csv

# Define the input and output file paths
input_file = 'megaproxylist.csv'
output_file = 'proxies.txt'

# Open the input file and read its content
with open(input_file, 'r') as csvfile:
    # Create a csv reader object
    reader = csv.reader(csvfile, delimiter=';')
    
    # Open the output file in write mode
    with open(output_file, 'w') as outfile:
        # Loop through each row in the CSV
        for row in reader:
            # Write the first element (IP address) to the output file
            outfile.write(row[0] + '\n')

print(f'Proxies have been extracted to {output_file}')
