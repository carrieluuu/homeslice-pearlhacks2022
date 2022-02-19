

//GET /listings: send all listings to the user
exports.index = (req, res) => {
    res.send('send all stories');
};

//GET /listings/new: send html form for creating a new listing
exports.new = (req, res) => {
    res.send('send the new form');
};

//POST /listings: create a new listing
exports.create = (req, res) => {
    res.send('created a new listing');
};

//GET /listings/:id: send details of listing identified by id
exports.details = (req, res) => {
    res.send('send the listing with id ' + req.params.id);
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


