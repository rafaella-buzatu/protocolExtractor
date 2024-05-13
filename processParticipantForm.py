import pandas as pd
import os
import numpy as np

def handle_form(data):
    excel_path = os.path.join('/tmp', 'participant_data.xlsx')
    
    try:
        df = pd.read_excel(excel_path)
    except FileNotFoundError:
        df = pd.DataFrame(columns=['Participant ID', 'First Name', 'Middle Name', 'Last Name', 'Affiliation', 'E-mail'])
    
    participant_id = np.random.randint(100000, 999999)
    while participant_id in df['Participant ID'].values:
        participant_id = np.random.randint(100000, 999999)

    new_row = pd.DataFrame({
        'Participant ID': [participant_id],
        'First Name': [data['firstName']],
        'Middle Name': [data['middleName']],
        'Last Name': [data['lastName']],
        'Affiliation': [data['university']],
        'E-mail': [data['email']]
    })

    df = pd.concat([df, new_row], ignore_index=True)
    df.to_excel(excel_path, index=False)
    
    return {"message": "Data received and saved", "Participant ID": participant_id}
