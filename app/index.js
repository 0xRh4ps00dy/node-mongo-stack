const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// URL de connexió utilitzant el nom del servei Docker
const mongoUrl = 'mongodb://admin:password123@mongo_db:27017/test?authSource=admin';

mongoose.connect(mongoUrl)
  .then(() => console.log('Connectat a MongoDB!'))
  .catch(err => console.error('Error de connexió:', err));

app.get('/', (req, res) => {
  res.send('<h1>Hola Equip!</h1><p>L\'aplicació Node funciona darrere de Nginx.</p>');
});

app.listen(port, () => {
  console.log(`App escoltant al port ${port}`);
});