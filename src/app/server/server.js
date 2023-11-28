const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/armoire', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conexión a la base de datos establecida');
});

// Rutas
const router = require('./rutas.js');
app.use('/', router);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
