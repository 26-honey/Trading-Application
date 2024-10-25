const express = require('express');
const router = express.Router();
const controller = require('../controllers/tradeController');

//Get /trades: show all the trades to the user
router.get('/', controller.index);

//Get /trades/new : create a new trade
router.get('/new', controller.new);

//Post /trades : post a new trade
router.post('/', controller.create);

//Get /trades/:id : show the trade details to the user
router.get('/:id', controller.show);

//Get /trades/:id/edit : send the form for editing the trade details
router.get('/:id/edit', controller.edit);

//Put /trades/:id : update the trade details identified by id
router.put('/:id', controller.update);

//Delete /trades/:id : Delete the trade details identified by id
router.delete('/:id', controller.delete);

module.exports = router;