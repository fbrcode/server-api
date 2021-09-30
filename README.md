# Mock API server output

Run a mock JSON output from express js server.

## Install

Just get node/npm latest LTS version (nvn is recommended) and run:

```sh
npm install
```

## Startup

Just run the following to start the server (default port 3333):

```sh
npm start
```

## Validate

Call cURL command to get mocked output:

```sh
curl -X 'GET' \
'http://localhost:3333/v1/sensor/31d42f54-ef12-4c83-a5be-19a87368b648' \
-H 'accept: application/json' | \
node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 4 ))"
```

Expected Output:

```json
{
    "uuid": "31d42f54-ef12-4c83-a5be-19a87368b648",
    "qrCode": "qr##code##sample##data",
    "sensorData": {
        "lastTimestamp": "2021-02-01 00:00:00",
        "score": 90.8,
        "scoreUnit": "device",
        "temperature": 77.9,
        "temperatureUnit": "F",
        "humidity": 33.9,
        "humidityUnit": "g/m3",
        "co2": 408.8,
        "co2Unit": "ppm",
        "voc": 148,
        "vocUnit": "ppm",
        "pm25": 2.7,
        "pm25Unit": "2.5 micrometers",
        "light": 12.8,
        "lightUnit": "lumens",
        "noise": 62.2,
        "noiseUnit": "dB"
    },
    "location": {
        "street": "123 Main Street",
        "city": "Miami",
        "state": "FL",
        "zip": "33132"
    },
    "category": {
        "id": 1,
        "name": "Basic Type"
    },
    "status": "active"
}
```
