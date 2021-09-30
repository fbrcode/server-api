import express from 'express';
import morgan from 'morgan';

const PORT = 3333;

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) =>
  res.send({
    message: 'Inveniam Airnode mock web API is running on port ' + PORT + '!',
  })
);

app.get('/v1/sensor/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  // fixed client on this mock, sensor UUID in path
  if (uuid === '31d42f54-ef12-4c83-a5be-19a87368b648') {
    res.status(200).send({
      uuid: '31d42f54-ef12-4c83-a5be-19a87368b648',
      qrCode: 'qr##code##sample##data',
      sensorData: {
        lastTimestamp: '2021-02-01 00:00:00',
        score: 90.8,
        scoreUnit: 'device',
        temperature: 77.9,
        temperatureUnit: 'F',
        humidity: 33.9,
        humidityUnit: 'g/m3',
        co2: 408.8,
        co2Unit: 'ppm',
        voc: 148,
        vocUnit: 'ppm',
        pm25: 2.7,
        pm25Unit: '2.5 micrometers',
        light: 12.8,
        lightUnit: 'lumens',
        noise: 62.2,
        noiseUnit: 'dB',
      },
      location: {
        street: '123 Main Street',
        city: 'Miami',
        state: 'FL',
        zip: '33132',
      },
      category: {
        id: 1,
        name: 'Basic Type',
      },
      status: 'active',
    });
    return;
  }

  res.status(404).send({
    message: 'Unknown sensor UUID.',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
