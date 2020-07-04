var express = require('express');
var router = express.Router();
const messageController = require('../controllers/messages');

router.get('/', messageController.getMessages);

router.post('/createMessage', messageController.createMessage);

router.delete('/deleteMessage', messageController.deleteMessage);

router.delete('/deleteAllMessages', messageController.deleteAllMessages)

module.exports = router;
