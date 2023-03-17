const { Cliente, Arreglos } = require("../db");
const { Op, where } = require("sequelize");

const ObjUsers = {
  nombre: "pepe",
  telefono: 123,
};

const getDbClients = async () => {
  let clients = await Cliente.findAll({
    include: {
      model: Arreglos,
    },
  });
  if (!clients.length) {
    clients = await Cliente.create(ObjUsers);
    return clients;
  }
  return clients;
};

const getClient = async (id) => {
  try {
    const client = await Cliente.findAll({
      include: {
        model: Arreglos,
      },
      where: { id },
    });
    return client;
  } catch (error) {
    console.log(error);
  }
};

const updateClient = async (info, id) => {
  try {
    console.log("soy info", id);
    await Cliente.update(
      {
        nombre: info.nombre,
        telefono: info.telefono,
      },
      {
        where: {
          id,
        },
      }
    );

    return `client id:${id} updated successfully`;
  } catch (error) {
    return `Ocurrio el siguiente errror: ${error}`;
  }

  // const [response] = await Cliente.update(info, {
  //   where: {
  //     joyas,
  //     reloj,
  //     nombre,
  //   },
  // });
  // if (response) {
  //   return `client id:${id} updated successfully`;
  // } else {
  //   throw new Error("product not found");
  // }
};

const getClientByPk = async (id) => {
  const cliente = await Cliente.findOne({
    where: { id },
    include: {
      model: Arreglos,
    },
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

// const addJoya = async (id, info) => {
//   let addJoya = info.joya;

//   await Cliente.update({asd
//     where: {
//       id,
//       joyas: { ...joyas, addJoya },
//     },
//   });
// };

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

module.exports = {
  createClient,
  getClientByPk,
  getDbClients,
  getClienteByName,
  updateClient,
  getClient,
};

// const getClients = async (req, res) => {
//   const { nombre } = req.query;

//   if (nombre) {
//     Cliente.findAll({
//       include: {
//         model: Arreglo,
//       },
//       where: {
//         nombre: nombre,
//       },
//     })
//       .then((cliente) => {
//         return res.status(200).json(cliente.length >= 1 ? cliente : []);
//       })
//       .catch((error) => {
//         res.send(error);
//       });
//   } else {
//     Cliente.findAll({
//       include: {
//         model: Arreglo,
//       },
//     })
//       .then((cliente) => {
//         res.status(200).json(cliente.length >= 1 ? cliente : []);
//       })
//       .catch((error) => res.send(error));
//   }
// };
