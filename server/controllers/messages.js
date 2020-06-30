let messageSchema = require('../models/messageSchema');
let {v4: uuidv4} = require('uuid');

const getMessages = (req, res, next) => {

    res.status(200).json({message: 'got messages'});
};

const createMessage = (req, res, next) => {
    const message = new messageSchema({
        _id: uuidv4(),
        text: req.body.text,
        date: req.body.date
    })

    message.save().then(() => {
        console.log("Message Created");
        res.status(200).json({message: 'Message Created'});
    }).catch((err) => {
        res.status(500).json({message: err});
    })
    
};

const deleteMessage = (req, res, next) => {
    res.status(200).json({message: 'message deleted'});
};

module.exports = {getMessages, createMessage, deleteMessage};