// const { Router } = require("express");
// const { Cliente, Arreglos } = require("../db");
// const { getClientByPk } = require("./clientCotroller");
// const router = Router();

// const postArreglo = async (req, res) => {
//   // Hago destructuring de la data mandada por bodyasdasd
//   const { arregloReloj, arregloJoya, id, joya, reloj } = req.body;
//   if (arregloReloj && arregloJoya && joya && reloj) {
//     try {
//       const client = await getClient(id);
//       console.log("soy client", client);
//       if (client.length) {
//         const [arreglo, created] = await Arreglos.findOrCreate({
//           where: { joya, arregloJoya, reloj, arregloReloj },
//           defaults: {
//             joya: "",
//             arregloJoya: "",
//             reloj: "",
//             arregloReloj: "",
//           },
//         });
//         let nameCliente = [];
//         await client.map(async (e) => {
//           nameCountries.push(e.dataValues.nombre);
//           await e.addArreglo(arreglo);
//         });
//         res.status(200).send("ok");
//       } else {
//         res
//           .status(404)
//           .send(`Countries not found ${id.join(`, `).toUpperCase()}`);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return console.log("123");
//   }
// };

// const agregarArreglo = async (arreglos, id) => {
//   console.log("id", id);
//   const cliente = await getClientByPk(id);

//   const obj = {
//     joya: arreglos.joya,
//     arregloJoya: arreglos.arregloJoya,
//     reloj: arreglos.reloj,
//     arregloReloj: arreglos.reloj,
//   };

//   console.log("soy cliente", cliente);
//   console.log("soy clientearr", cliente.dataValues.arreglos);
//   cliente.arreglos = "asd";
//   // await cliente.save();
//   return `arreglo agregado al cliente`;
// };

// // const getActivityById = async (req, res) => {
// //   try {
// //     const { idActivity } = req.params;
// //     const activity = await Activity.findAll({
// //       include: {
// //         model: Country,
// //       },
// //       where: {
// //         id: idActivity,
// //       },
// //     });
// //     console.log(activity);
// //     res.json(activity ? activity : []);
// //   } catch (e) {
// //     res.send(e);
// //   }
// // };

// module.exports = {
//   postArreglo,
//   agregarArreglo,
// };
