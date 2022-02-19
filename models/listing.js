const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');

const listings = [
    {
        id: '1',
        title: 'East Village 4 Month Lease',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sapien nibh, ac efficitur diam pellentesque ut.',
        author: 'Zaina',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'UNCC East Deck 1 year',
        content: 'Aliquam sagittis ut ipsum vitae fringilla. Etiam at orci scelerisque, egestas lectus in, feugiat tortor.',
        author: 'Walrus',
        createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => listings; 

exports.save = listing => {
    listing.id = uuidv4();
    listing.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    listings.push(listing);
    //change this with database later
}

exports.findById = id => listings.find(listings=>listings.id ===  id);
