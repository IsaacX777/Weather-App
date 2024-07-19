from flask import Flask
from flask_cors import CORS
from data_fetch import data_fetch

app = Flask(__name__)
CORS(app, resources={r"/Fetch_Data/*": {"origins": "http://localhost:3000"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/Fetch_Data/<location>', methods=["GET"])
def get_weather_data(location):
    # Handle what fields to return
    return data_fetch(location)

if __name__ == '__main__':
    app.run(debug=True)
        
