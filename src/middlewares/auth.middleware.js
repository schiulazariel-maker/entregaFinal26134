import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" });
  }

  //obtengo con split el indice que necesito, en este caso el token
  const token = authHeader.split(" ")[1];
  
  //valida si hay token
  if (!token) {
    return res.status(401).json({ message: "Formato de token invalido" });
  }
 
  //puede fallar por eso va dentro de try-catch
  try {

    //es un objeto
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    
    //si funciona sigue...
    next();
  } catch (error) {

    //403 prohibido ingresar, token alerado o invalido
    return res.status(403).json({ message: "Token invalido o expirado" });
  }
};

