const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {sendMessage} = require('../twilio/send-sms');
const SMS = require('../models/sms');
const config = require('../config');


const {getSocket} =require('../sockets');

const indexControler=  async (req, res)=>{
    const mensajes = await SMS.find().sort('-createdAt').lean();
    const katito = await config.virtual_numero;
    res.render('index', {
        mensajes,
        katito
    });
}

const sendSms = async (req,res)=>{

    const {mensaje, telefono} =req.body;
    if (!mensaje || !telefono) return res.json("no hay nada :)");

    const response = await sendMessage(req.body.mensaje, req.body.telefono);

    await SMS.create({Body: req.body.mensaje, To:req.body.telefono})

    console.log(response.sid +' '+ req.body.mensaje + ' ' + req.body.telefono);
    res.send('mensaje enviado');
};

const recibirmensaje = async (req, res)=>{
    console.log(req.body.Body);

    const saveSMS = await SMS.create({
        Body: req.body.Body,
        From: req.body.From
    })

    getSocket().emit('nuevo mensaje', saveSMS)

    const twiml = new MessagingResponse();
    //* twiml.message('Respuesta');
    res.send(twiml.toString());
}

module.exports ={indexControler, sendSms, recibirmensaje}