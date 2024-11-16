var express = require('express');
var router = express.Router();
var Controller = require('../Controllers/travel');

/* GET travel page. */
router.get('/', Controller.travel);

module.exports = router;