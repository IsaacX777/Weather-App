import requests
from datetime import datetime, timedelta

import json
                
def data_fetch(location):
    date_current = datetime.today()
    date_current = date_current.strftime('%Y-%m-%d')

    date_end = datetime.today() + timedelta(days=1)
    date_end = date_end.strftime('%Y-%m-%d')

    request_url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}/{date_current}/{date_end}?unitGroup=metric&include=current&key=3JDHJLN4ELHSUMZTBFXHPF6QY&contentType=json"
    response = requests.request("GET", request_url)
    if response.status_code != 200:
        print('Search Error: ', response.status_code)


    # Parse the results as JSON
    jsonData = response.json()

    return jsonData

# print(data_fetch("Houston"))