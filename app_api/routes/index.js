const express = require('express'); // Express app
const router = express.Router(); //Router logic

//This is where we import the controllers we will route
const tripController = require('../controllers/trips');

// define router for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); //GET Method routes tripList

// GET Method routes tripsFindByCode - require parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
    
    module.exports = router;