from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/process-participant', methods=['POST'])
def process_participant():
    data = request.get_json()
    excel_path = os.path.join('/tmp', 'participant_data.xlsx')
    
    # Load the existing Excel file
    try:
        df = pd.read_excel(excel_path)
    except FileNotFoundError:
        # If the file does not exist, create a new DataFrame
        df = pd.DataFrame(columns=['Participant ID', 'First Name', 'Middle Name', 'Last Name', 'Affiliation', 'E-mail'])
    # Generate a unique Participant ID
    while True:
        participant_id = np.random.randint(100000, 999999)
        if participant_id not in df['Participant ID'].values:
            break
    
   # Create a new DataFrame for the incoming data
    new_row = pd.DataFrame({
        'Participant ID': [participant_id],
        'First Name': [data['firstName']],
        'Middle Name': [data['middleName']],
        'Last Name': [data['lastName']],
        'Affiliation': [data['university']],
        'E-mail': [data['email']]
    })

    # Append the new row to the existing DataFrame
    df = pd.concat([df, new_row], ignore_index=True)

    # Save the DataFrame back to the Excel file
    df.to_excel(excel_path, index=False)

    return jsonify({"message": "Data received and saved", "Participant ID": participant_id})

if __name__ == '__main__':
    app.run(debug=True)