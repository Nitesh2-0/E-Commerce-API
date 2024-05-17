const express = require('express');
const router = express.Router();
const route = require('../controllers/indexController');
const {jwtAuthMiddleware} = require('../jwt')


router.get('/', jwtAuthMiddleware ,route.home);

router.get('/home', (req, res, next) => {
  res.render('registration');
});

router.get('/loginForm', (req, res, next) => {
  res.render('login');
});

router.post('/register', route.register);

router.post('/login', route.login);

router.post('/products-created', jwtAuthMiddleware ,route.products);

router.get('/readAll', jwtAuthMiddleware ,route.readAll);

router.get('/seeAllProducts',jwtAuthMiddleware,route.findProducts);

module.exports = router;
