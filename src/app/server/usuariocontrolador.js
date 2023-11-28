const usuarioControlador = {
  login: async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
      // Busca el usuario por correo
      const usuario = await Usuario.findOne({ correo });

      // Verifica si el usuario existe
      if (!usuario) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }

      // Verifica la contraseña
      const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

      if (!contraseñaValida) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }

      // Genera un token JWT para autenticación
      const token = jwt.sign({ usuarioId: usuario._id }, 'tu_secreto', { expiresIn: '1h' });

      // Envía una respuesta exitosa con el token
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  },
};

module.exports = usuarioControlador;
