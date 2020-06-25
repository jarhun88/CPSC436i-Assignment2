var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const mongoDB = "mongodb+srv://jarhun88:Johnnyboy88!@sandbox-2dwp1.mongodb.net/antworld?retryWrites=true&w=majority";

const messageController = require('../controllers/messages');
// mongoose.connect(mongoDB, { useNewUrlParser: true });

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* GET users listing. */
router.get('/', messageController.getMessages);

router.post('/createMessage', messageController.createMessage);

router.delete('/deleteMessage', messageController.deleteMessage);

module.exports = router;
