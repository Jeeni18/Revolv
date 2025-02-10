import requests

url = "https://api.sparrowsms.com/v2/sms/"
params = {
    'token': 'v2_c0kEbSayIao3ufSOzRUIWrm5urH.1LEd',
    'from': 'Demo',
    'to': '9862186950',
    'text': 'You have logged in into Revolv'
}

response = requests.post(url, data=params)
print(response.json())
