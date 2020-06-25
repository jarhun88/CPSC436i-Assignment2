let messageSchema = require('../models/messageSchema');

const getMessages = (req, res, next) => {

    res.status(200).json({message: 'got messages'});
};

const createMessage = (req, res, next) => {
    const message = new messageSchema({
        _id: 0,
        text: "fadsfasdf",
        date: "01/01/2001"
    })

    message.save().then(() => {
        console.log("Message Created");
        res.status(200).json({message: 'message Created'});
    }).catch((err) => {
        res.status(500).json({message: err});
    })
    
};

const deleteMessage = (req, res, next) => {
    res.status(200).json({message: 'message deleted'});
};

module.exports = {getMessages, createMessage, deleteMessage};