const { Router } = require("express");
const router = Router();
const {
  getDbClients,
  createClient,
  getClienteByName,
  getClientByPk,
  updateClient,
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

router.post("/", (req, res) => {
  try {
    // const { nombre, id, relojes, joyas } = req.body;
    createClient(req.body);
    res.send(`cliente creado correctamente`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const client = await getClientByPk(req.params.id);
    const id = req.params.id;
    const { addedJoya, nombre, relojes } = req.body;
    console.log(addedJoya, client.joyas);
    const updatedData = [...client.joyas, addedJoya];
    // console.log("joyas", joyas);
    const obj = { joyas: updatedData };
    const updateCliente = await updateClient(obj, id);
    return res.status(200).send(updateCliente);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
