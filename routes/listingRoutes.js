const express = require('express');

//add controller
const controller = require('../controllers/listingController');

//Use express router object
const router = express.Router();


//GET /listings: send all listings to the user
router.get('/', controller.index);

//POST /listings: create a search
router.post('/', controller.search);

//GET /mylistings: send all of user listings to the user
router.get('/mylistings', controller.mylistings);

//GET /listings/new: send html form for creating a new listing
router.get('/new', controller.new);

//POST /listings: create a new listing
router.post('/', controller.create);

//GET /listings/:id: send details of listing identified by id
router.get('/:id', controller.details);

//GET /listings/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /listings/:id: update the listing identified by the id
router.put('/:id', controller.update);

//DELETE /listings/:id: delete the listing identified by the id
router.delete('/:id', controller.delete);


//export router module
module.exports = router;