from flask import Flask
from data_fetch import data_fetch

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/Fetch_Data/<location>', methods=["GET"])
def get_weather_data(location):
    # Handle what fields to return
    return data_fetch(location)

if __name__ == '__main__':
    app.run(debug=True)
        
