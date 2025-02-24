const express = require('express');
const controller = require('../controllers/userController');
const { isGuest, isLoggedIn } = require('../middlewares/auth');
const { logInLimiter } = require('../middlewares/rateLimiters');
const { validateSignUp, validateLogIn, validateResult } = require('../middlewares/validator');

const router = express.Router();

//GET /users/new: send html form for creating a new user account

router.get('/new', isGuest, controller.new);

//POST /users: create a new user account

router.post('/', isGuest, validateSignUp, validateResult, controller.create);

//GET /users/login: send html for logging in
router.get('/login', isGuest, controller.getUserLogin);

//POST /users/login: authenticate user's login
router.post('/login',logInLimiter, isGuest, validateLogIn, validateResult, controller.login);

//GET /users/profile: send user's profile page
router.get('/profile', isLoggedIn, controller.profile);

//POST /users/logout: logout a user
router.get('/logout', isLoggedIn, controller.logout);

//POST /trades/:id trades avaiable to trade
router.post('/trades/:id', isLoggedIn, controller.trades);

//GET /trade/offer/:id offer trade
router.get('/trade/offer/:id', isLoggedIn, controller.offer);

//GET /trade/ownoffer/:id manage trade offer
router.get('/trade/ownoffer/:id', isLoggedIn, controller.ownoffer);

//PUT /trade/offer/cancel/:id delete's the offer
router.put('/trade/offer/cancel/:id', isLoggedIn, controller.cancelOffer);

//PUT /trade/offer/accept/:id accept's the offer
router.put('/trade/offer/accept/:id', isLoggedIn, controller.acceptOffer);

module.exports = router;