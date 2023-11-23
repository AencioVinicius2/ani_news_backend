import { Router } from "express";
import HomeController from "../controllers/HomeController.js";

const router = new Router();

router.get("/", ((req, res) => {
  res.send('Olá, mundo!');
}));

export default router;
