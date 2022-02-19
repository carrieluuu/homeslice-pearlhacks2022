//Use express router object
const express = require('express');
const router = express.Router();

//GET /listings: send all listings to the user
router.get('/', (req, res) => {
    res.send('send all stories');
});

//GET /listings/new: send html form for creating a new listing
router.get('/new', (req, res) => {
    res.send('send the new form');
});

//POST /listings: create a new listing
router.get('/new', (req, res) => {
    res.send('created a new listing');
});

//GET /listings/:id: send details of listing identified by id
router.get('/:id', (req, res) => {
    res.send('send the listing with id ' + req.params.id);
});

//GET /listings/:id/edit: send html form for editing an existing story
router.get('/:id/edit', (req, res) => {
    res.send('send the edit form');
});

//PUT /listings/:id: update the listing identified by the id
router.put('/:id', (req, res) => {
    res.send('update story with id ' + req.params.id);
});


//export router module
module.exports = router;