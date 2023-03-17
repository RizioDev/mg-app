// funciones para poder crear nuestros modelos
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  return sequelize.define("arreglos", {
    joya: {
      type: DataTypes.ENUM(
        "anillo de plata",
        "anillo de oro",
        "alianza de plata",
        "alianza de oro",
        "cadena de plata",
        "cadena de oro",
        "dije",
        "aro de plata",
        "aro de oro",
        "abridor de plata",
        "abridor de oro",
        "pulsera de plata",
        "pulsera de oro",
        "esclava de plata",
        "esclava de oro",
        "tobillera"
      ),
    },
    arregloJoya: {
      type: DataTypes.ENUM(
        "soldar",
        "grabar",
        "pulir",
        "cuerpo nuevo",
        "hacer palito",
        "poner piedra",
        "engarzar"
      ),
    },
    reloj: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5", "6", "7", "8"),
    },
    arregloReloj: {
      type: DataTypes.ENUM(
        "cambio de maquina",
        "service relojes (seiko,citizen,tressa,casio,etc)",
        "service reloj con calendario",
        "service reloj con calendario (tommy,casio,festina,etc)",
        "service reloj crono",
        "cabezales de malla metalicos",
        "cambio de corona",
        "cambio de tige y corona",
        "pegar numeros",
        "pegar palitos",
        "pegar relieves",
        "colocar agujas",
        "colocar perno",
        "colocar perno remachado",
        "cambio de cierre tijera",
        "ajuste de cuadrante",
        "cambio de vidrio plano",
        "cambio de vidrio curvo",
        "cambio de vidrio borde pintado",
        "cambio de vidrio doble altura",
        "pulir vidrio acrilico",
        "sacar eslabones",
        "poner eslabones",
        "alargar malla",
        "adaptar malla"
      ),
    },
  });
};
