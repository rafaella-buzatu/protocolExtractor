from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import os
import json

app = Flask(__name__)
CORS(app)


@app.route('/submit-form', methods=['POST'])
def handle_form():
    # Generate the unique key from the request data
    data = request.get_json()
    unique_key = f"{data['participantID']}_{data['publicationID']}"
    print(f"Handling data for: {unique_key}")

    # Define the path to the JSON file
    file_path = 'data/protocols_data.json'

    # Read existing data from the file or initialize an empty dictionary
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            try:
                protocols_data = json.load(file)
            except json.JSONDecodeError:
                protocols_data = {}  # Initialize as empty if there's a decode error
    else:
        protocols_data = {}

    # Determine the next entry key
    if protocols_data:
        next_key = "entry_" + str(len(protocols_data) + 1)
    else:
        next_key = "entry_1"

    # Update the data under the new entry key
    protocols_data[next_key] = data

    # Write the updated dictionary back to the file
    with open(file_path, 'w') as file:
        json.dump(protocols_data, file, indent=4)

    return jsonify({"message": "Data processed and saved to JSON under the key " + unique_key})

if __name__ == '__main__':
    app.run(debug=True)
