// const { Router } = require("express");
// const { Cliente, Arreglos } = require("../db");
// const { getClientByPk } = require("../controllers/clientCotroller");
// const {
//   postArreglo,
//   agregarArreglo,
// } = require("../controllers/arreglosController");
// const router = Router();

// router.post("/", postArreglo);

// router.post("/:id/arreglos", async (req, res) => {
//   const { id } = req.params;
//   console.log("ee", id);
//   const { reloj, arregloReloj, joya, arregloJoya } = req.body;
//   try {
//     const arreglos = { reloj, arregloReloj, joya, arregloJoya };
//     await agregarArreglo(arreglos, id);
//     return res.send(`arreglo agregado correctamente al cliente con id ${id}`);
//   } catch (error) {
//     return res.send(error);
//   }
// });

// router.post("/:id/arreglos", async (req, res) => {
//   try {
//     const cliente = await getClientByPk(req.params.id);
//     if (!cliente) {
//       return res.status(404).json({ message: "Cliente no encontrado" });
//     }

//     const nuevoArreglo = req.body;
//     cliente.arreglos.push(nuevoArreglo);
//     await cliente.save();

//     res.json({ message: "Objeto agregado al arreglo del cliente", cliente });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Error al agregar objeto al arreglo del cliente" });
//   }
// });

// module.exports = router;
