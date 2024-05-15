from flask import Flask, request, jsonify, render_template
from processParticipantForm import handle_form as handle_participant_form
from processProtocolForm import handle_form as handle_protocol_form
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

@app.route('/submit-participant', methods=['POST'])
def submit_participant():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({'error': 'No data received'}), 400
        
        response = handle_participant_form(data)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/submit-protocol', methods=['POST'])
def submit_protocol():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({'error': 'No data received'}), 400
        
        response = handle_protocol_form(data)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/save-file', methods=['POST'])
def save_file():
    file = request.files['file']
    temp_path = os.path.join(tempfile.gettempdir(), file.filename)
    file.save(temp_path)
    return jsonify({'message': f'File temporarily saved at {temp_path}'})

if __name__ == '__main__':
    app.run(debug=True)
