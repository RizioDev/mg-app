const { Router } = require("express");
const router = Router();
const {
  getDbClients,
  createClient,
  getClienteByName,
  getClientByPk,
  updateClient,
  deleteClient,
} = require("../controllers/clientCotroller");

router.get("/", (req, res) => {
  return res.send("hello");
});

router.get("/getAll", async (req, res) => {
  const { nombre } = req.query;
  try {
    if (nombre) {
      const clientByName = await getClienteByName(nombre);
      return res.status(200).json(clientByName);
    }
    const clients = await getDbClients();
    res.status(200).json(clients);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const client = await getClientByPk(req.params.id);
    return res.status(200).json(client);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id/arreglos", async (req, res) => {
  try {
    const cliente = await getClientByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const nuevoArreglo = req.body;
    cliente.arreglos.push(nuevoArreglo);
    await cliente.save();

    res.json({ message: "Objeto agregado al arreglo del cliente", cliente });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al agregar objeto al arreglo del cliente" });
  }
});

router.post("/", (req, res) => {
  try {
    // const { nombre, id, relojes, joyas } = req.body;
    createClient(req.body);
    res.send(`cliente creado correctamente`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    deleteClient(id);
    res.send(`cliente eliminado correctamente`);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono } = req.body;
  const info = { nombre, telefono };

  try {
    // console.log("soy info", info);
    updateClient(info, id);
    res.send("cliente actualizado con exito");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
