const { Cliente, Arreglos } = require("../db");
const { Op, where } = require("sequelize");

const ObjUsers = {
  nombre: "pepe",
  telefono: 123,
};

const getDbClients = async () => {
  let clients = await Cliente.findAll();
  if (!clients.length) {
    clients = await Cliente.create(ObjUsers);
    return clients;
  }
  return clients;
};

const getClient = async (id) => {
  try {
    const client = await Cliente.findAll({
      where: { id },
    });
    return client;
  } catch (error) {
    console.log(error);
  }
};

const updateClient = async (info, id) => {
  // console.log("soy info", info);
  try {
    const result = await Cliente.update(
      { nombre: info.nombre, telefono: info.telefono },
      { where: { id } }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const getClientByPk = async (id) => {
  const cliente = await Cliente.findOne({
    where: { id },
  });
  if (!cliente) {
    throw new Error("cliente no encontrado");
  }
  return cliente;
};

const createClient = async (info) => {
  await Cliente.create({
    id: info.id,
    nombre: info.nombre,
    telefono: info.telefono,
  });
  return `cliente ${info.nombre} creado correctamente`;
};

const getClienteByName = async (nombre) => {
  const clientes = await Cliente.findAll({
    where: {
      nombre: {
        [Op.iLike]: `%${nombre}%`,
      },
    },
  });
  return clientes;
};

const deleteClient = async (id) => {
  await Cliente.destroy({ where: { id } });
  return `cliente con el id ${id} fue eliminado correctamente`;
};

module.exports = {
  createClient,
  deleteClient,
  getClientByPk,
  getDbClients,
  getClienteByName,
  updateClient,
  getClient,
};
