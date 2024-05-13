from flask import Flask, request, jsonify, render_template
import processParticipantForm
import processProtocolForm

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-participant', methods=['POST'])
def handle_participant():
    # Assuming a function in processParticipantForm.py handles the form data
    response = processParticipantForm.handle_form(request.json)
    return jsonify(response)

@app.route('/submit-protocol', methods=['POST'])
def handle_protocol():
    # Assuming a function in processProtocolForm.py handles the form data
    response = processProtocolForm.handle_form(request.json)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
