import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

//prefijo: /api/auth

//datos sensibles siempre por post, cifrados
router.post("/login", login);

export default router;