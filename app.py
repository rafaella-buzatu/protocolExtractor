from flask import Flask, request, jsonify, render_template
from processParticipantForm import handle_form as handle_participant_form
from processProtocolForm import handle_form as handle_protocol_form
import os
from google.cloud import storage
from google.oauth2 import service_account

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
    

def get_gcs_client():
    """Create a GCS client using credentials from an environment variable."""
    credentials_info = os.getenv('GOOGLE_APPLICATION_CREDENTIALS_JSON')
    if credentials_info:
        credentials_dict = json.loads(credentials_info)
        credentials = service_account.Credentials.from_service_account_info(credentials_dict)
    else:
        raise EnvironmentError("Failed to retrieve GCS credentials")
    client = storage.Client(credentials=credentials)
    return client

def upload_file_to_gcs(file, bucket_name, blob_name):
    """Uploads a file to the specified GCS bucket."""
    client = get_gcs_client()
    bucket = client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    blob.upload_from_file(file.stream, content_type=file.content_type)
    return blob.public_url

@app.route('/save-file', methods=['POST'])
def save_file():
    try:
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        bucket_name = os.environ.get('GCP_STORAGE_BUCKET')
        if not bucket_name:
            return jsonify({'error': 'Bucket name not configured'}), 500

        public_url = upload_file_to_gcs(file, bucket_name, file.filename)
        return jsonify({'message': f'File uploaded to {public_url}'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)