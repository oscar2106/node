const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res){
    
    controller.getMessages()
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    .catch( e => {
        response.error(req, res, 'Unexpected error', 500, e);
    })
    })    
    // console.log(req.headers);
    // res.header({
    //     "custom-headers": "Nuestro valor personalizado"
    // });
    // // res.send('Lista de mensajes');
    // response.success(req,res, 'Lista de mensajes');
});
router.post('/', function(req, res){
    // console.log(req.query);
    // console.log(req.body);

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=> {
        response.success(req, res,fullMessage, 201);
    })
    .catch( e => {
        response.error(req, res, 'Informacion invalida ', 400, ' Error en el conenido');
});

    // if(req.query.error == "ok"){
    //     response.error(req, res, 'Error inesperado', 500, ' Es solo una simulacion de los errores');
    // } else {
    //     response.success(req,res, 'Creado correctamente');
    // }
    // res.send('Mensaje '+ req.body.text +' añadido correctamente');
    // res.send();
    // res.status(201).send([{'error': '', 'body': 'Creado correctamente'}]);
});

module.exports = router;