//import model
const model = require('../models/listing');

//GET /listings: send all listings to the user
exports.index = (req, res) => {
    //res.send(model.find());
    let listings = model.find();
    res.render('./listing/index', {listings});
};

//GET /listings/new: send html form for creating a new listing
exports.new = (req, res) => {
    res.render('./listing/new')
};

//POST /listings: create a new listing
exports.create = (req, res) => {
    res.send('created a new listing');
    let listing = req.body;
    model.save(listing);
    res.redirect('/listings');
};

//GET /listings/:id: send details of listing identified by id
exports.details = (req, res) => {
    // res.send('send the listing with id ' + req.params.id);
    let id = req.params.id;
    let listing = model.findById(id);
    //check if id exists
    if(listing) {
        res.render('./listing/details');
    } else {
        res.status(404).send('Cannot find topic with id ' + id);
    }
};

//GET /listings/:id/edit: send html form for editing an existing story
exports.edit = (req, res) => {
    res.send('send the edit form');
};

//PUT /listings/:id: update the listing identified by the id
exports.update = (req, res) => {
    res.send('update story with id ' + req.params.id);
};

//DELETE /listings/:id: delete the listing identified by the id
exports.delete = (req, res) => {
    res.send('delete story with id ' + req.params.id);
};


