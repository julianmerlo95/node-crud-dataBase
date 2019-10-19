const baseDatos = require('../../dataBase/database.js');
const userSchema = require('../../domain/schemas/domain.schema.js');
const moment = require('moment');
const logger = require('../utils/logOut');
const loggerOk = require('../utils/logOk');


let controllerUser = {

    getUser: function(req, res){
        return res.status(200).json({
            'error': false,
            "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
            'user': baseDatos.user
        });
    },

    getUserId: function(req, res){
        if(!validationId(req, res)){
            let index = req.params.id;
            
            loggerOk.info(` - El usuario ${req.params.id} se ha encontrado correctamente.`);
            return res.status(200).json({
                'Error': false,
                "Date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
                'User/id': baseDatos.user[index]
            })
        }
    },

    postUser: function(req, res){
        const newUSer = new userSchema(req.body);
        baseDatos.user.push(newUSer);
        loggerOk.info(` - El usuario ${newUSer} se ha creado correctamente.`);

            return res.json({
                'error': false,
                "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
                'user': newUSer
            }); 
    },

    putUser: function(req, res){
        if(!validationId(req, res)){
            let index = req.params.id;
            const newUser = new userSchema(req.body);
            baseDatos.user[index] = newUser;

            loggerOk.info(` - El usuario ${newUser} se ha editado correctamente.`);
            return res.json({
                'error': false,
                "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
                'user': newUser
            }); 
        }
    },

    deleteUser: function(req, res){
        if(!validationId(req, res)){
        baseDatos.user.splice([req.params.id], 1);
    
            return res.json({
                'error': false,
                "date": moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
                'user': baseDatos.user
            }); 
        }
    },

}

function validationId(req, res){
    if(req.params.id > baseDatos.user.length -1){
        logger.error('Error, verifique el id.');
        return res.json({
            'error': true,
            'msg': 'El id ingresado no se encuentra en el array de user'
            })
        }
    }

module.exports = controllerUser;