const express = require('express');
const router = express.Router();
const Usuario = require('./usermodel'); // Ajusta la ruta correcta
const usuarioControlador = require('./usuariocontrolador');

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Ruta para el inicio de sesión
router.post('/login', usuarioControlador.login);

module.exports = router;
