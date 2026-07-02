import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

//con guardar en data el id es suficiente, no guardar datos sensibles
export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
  };

  //mi firma, clave secreta //tiempo en que expire el token //tiempo para reiniciar sesión
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};