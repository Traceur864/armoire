const mongoose = require('mongoose');

// Define tu esquema
const tuSchema = new mongoose.Schema({
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  nombreUsuario: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  tipoDeCuenta: {
    type: String,
    enum: ['normal', 'empresa'],
    required: true,
  },
});

// Compila el modelo 'Usuario'
const Usuario = mongoose.model('Usuario', tuSchema);

// Exporta el modelo
module.exports = Usuario;
