import pandas as pd
import os

file_path = r'C:\Users\cjti\OneDrive - Chevron\Desktop\ScrapingTool\Data\Top10Customer.xlsx'

# Read the CSV file with the specified encoding
data = pd.read_excel(file_path)

# Rest of your code to convert to JSON and save it remains the same
json_data = data.to_json(orient='records', force_ascii=False)

# Specify the path for the JSON file
output_folder = r'C:\Users\cjti\OneDrive - Chevron\Desktop\ScrapingTool\Baqylau\Data'
output_file = os.path.join(output_folder, 'Top10Customer.json')

# Save the JSON data to a file
with open(output_file, 'w', encoding='utf-8') as file:
    file.write(json_data)

print(f"JSON data saved to: {output_file}")
