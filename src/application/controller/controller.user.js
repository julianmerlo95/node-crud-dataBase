const dataBase = require("../../dataBase/database.js");
const userSchema = require("../../domain/schemas/domain.schema.js");
const moment = require("moment");
const logger = require("../utils/logOut");
const loggerOk = require("../utils/logOk");

let controllerUser = {
  getUser: (req, res) => {
    return res.status(200).json({
      date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      users: dataBase.user
    });
  },

  getUserId: (req, res) => {
    if (!validationId(req, res)) {
      let id = req.params.id;

      loggerOk.info(
        ` - El usuario ${req.params.id} se ha encontrado correctamente.`
      );
      return res.status(200).json({
        Error: false,
        Date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        User: dataBase.user[id]
      });
    }
  },

  postUser: (req, res) => {
    const newUSer = new userSchema(req.body);
    dataBase.user.push(newUSer);
    loggerOk.info(` - El usuario ${newUSer} se ha creado correctamente.`);

    return res.json({
      error: false,
      date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      user: newUSer
    });
  },

  putUser: (req, res) => {
    if (!validationId(req, res)) {
      let id = req.params.id;
      const newUser = new userSchema(req.body);
      dataBase.user[id] = newUser;

      loggerOk.info(` - El usuario ${newUser} se ha editado correctamente.`);
      return res.json({
        error: false,
        date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        user: newUser
      });
    }
  },

  deleteUser: (req, res) => {
    if (!validationId(req, res)) {
      dataBase.user.splice([req.params.id], 1);

      return res.json({
        error: false,
        date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        user: dataBase.user
      });
    }
  }
};

function validationId(req, res) {
  if (req.params.id > dataBase.user.length - 1) {
    logger.error("Error, verifique el id.");
    return res.json({
      error: true,
      msg: "El id ingresado no se encuentra en el array de user"
    });
  }
}

module.exports = controllerUser;
