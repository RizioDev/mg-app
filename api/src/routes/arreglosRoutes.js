const { Router } = require("express");
const { Cliente, Arreglos } = require("../db");
const { postArreglo } = require("../controllers/arreglosController");
const router = Router();

router.post("/", postArreglo);

module.exports = router;
