
var express        = require('express');
var router         = express.Router();
var homeRoutes     = require('./home');
var landRoutes     = require('./land');
var userRoutes     = require('./user');

router.get('/',        homeRoutes.index);
router.get('/landing', landRoutes.index);
router.get('/profile', userRoutes.index);

module.exports=router;
