const { Router } = require("express");
const ClientesRoutes = require("./clientesRoutes");
// const ArreglosRoutes = require("./arreglosRoutes");

const router = Router();

router.use("/clientes", ClientesRoutes);
// router.use("/arreglos", ArreglosRoutes);

module.exports = router;
