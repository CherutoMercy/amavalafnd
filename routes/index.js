
var express        = require('express');
var router         = express.Router();
var homeRoutes     = require('./home');
var landRoutes     = require('./land');
var userRoutes     = require('./user');
var designersRoutes     = require('./designers');
var modelsRoutes     = require('./models');
var photographyRoutes     = require('./photography');
var photoshootsRoutes     = require('./photoshoots');


router.get('/',        homeRoutes.index);
router.get('/landing', landRoutes.index);
router.get('/designers', designersRoutes.index);
router.get('/models', modelsRoutes .index);
router.get('/photography', photographyRoutes.index);
router.get('/photoshoots', photoshootsRoutes.index);
router.get('/profile', userRoutes.index);

module.exports=router;
