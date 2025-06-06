from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submittodoitem', methods=['POST', 'GET'])
def submit_todo_item():
    item_name = request.form.get('itemName')
    item_description = request.form.get('itemDescription')

    if not item_name or not item_description:
        return "Missing data", 400

    return "Data submitted successfully!"
"""
@app.route('/', methods=['GET'])
def home_page():
    return render_page('')"""

