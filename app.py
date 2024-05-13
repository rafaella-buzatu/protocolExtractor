from flask import Flask, request, jsonify, render_template
import processParticipantForm
import processProtocolForm
import os
import tempfile

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup')
def signup():
    return render_template('participant-sign-up-form.html')

@app.route('/protocol')
def protocol():
    return render_template('protocol-form.html')

@app.route('/process-participant', methods=['POST'])
def handle_participant():
    try:
        # Attempt to get JSON data from the request
        data = request.get_json()
        if data is None:
            # If no JSON data is received, return an error response
            return jsonify({'error': 'No data received'}), 400

        # Process the received data using your custom function
        response = processParticipantForm.handle_form(data)
        return jsonify(response)
    except Exception as e:
        # Handle any unexpected errors that occur during processing
        return jsonify({'error': str(e)}), 500

@app.route('/submit-protocol', methods=['POST'])
def handle_protocol():
    try:
        data = request.get_json()
        if data is None:
            raise ValueError("No JSON data received")

        response = processProtocolForm.handle_form(data)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/save-file', methods=['POST'])
def save_file():
    file = request.files['file']
    temp_path = os.path.join(tempfile.gettempdir(), file.filename)
    file.save(temp_path)
    return jsonify({'message': f'File temporarily saved at {temp_path}'})

if __name__ == '__main__':
    app.run(debug=True)
