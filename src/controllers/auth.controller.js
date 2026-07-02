import { generateToken } from "../utils/token.generator.js";

//usuario en base de datos con contraseña encriptada
const default_user = {
  id: 1,
  name: "User",
  email: "user@email.com",
  password: "strongPass123",
  //validator express (minimo obligarotios de requisitos de contraseña)
  admin: true,
};

export const login = (req, res) => {

  //desconstruir el objeto, facilita lectura del codigo 
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Faltan credenciales",
    });
  }

  if (email !== default_user.email || password !== default_user.password) {
    return res.status(401).json({

      //no identificar que es erroneo email o usuario  
      message: "Credenciales inválidas",
    });
  }
  
  //genera token para autenticación
  const token = generateToken(default_user);

  res.json({
    message: "Login exitoso",
    token,
  });
};