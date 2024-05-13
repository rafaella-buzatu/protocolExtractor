import os
import json

def handle_form(data):
    unique_key = f"{data['participantID']}_{data['publicationID']}"
    file_path = os.path.join('/tmp', 'protocol_data.json')

    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            try:
                protocols_data = json.load(file)
            except json.JSONDecodeError:
                protocols_data = {}
    else:
        protocols_data = {}

    if protocols_data:
        next_key = "entry_" + str(len(protocols_data) + 1)
    else:
        next_key = "entry_1"

    protocols_data[next_key] = data
    with open(file_path, 'w') as file:
        json.dump(protocols_data, file, indent=4)

    return {"message": "Data processed and saved to JSON under the key " + unique_key}
