let messageSchema = require('../models/messageSchema');
let {v4: uuidv4} = require('uuid');

const getMessages = async (req, res) => {
    try {
        const messages = await messageSchema.find();
        return res.json(messages);
    } catch (err) {
        console.log(err)
        return res.status(500).send(err);
    }    
};

const createMessage = async (req, res) => {
    try {
        const message = new messageSchema({
            _id: uuidv4(),
            text: req.body.text,
            date: req.body.date
        })
        await message.save();
        return res.status(200).json({message: 'Message Created'}); 
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err});
    }
};

const deleteMessage = async (req, res) => {
    try {
        console.log(req.body._id)
        const messageDelete = await messageSchema.deleteOne({_id: req.body._id});
        console.log(messageDelete);
        if (messageDelete) {
            return res.status(200).json({message: 'successfully deleted'});
        } else {
            return res.status(500).json({message: 'could not delete'});
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err);
    }
};

const deleteAllMessages = async (req, res) => {
    try {
        const deleteAll = await messageSchema.remove({});
        return res.json(deleteAll);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

module.exports = {getMessages, createMessage, deleteMessage, deleteAllMessages};