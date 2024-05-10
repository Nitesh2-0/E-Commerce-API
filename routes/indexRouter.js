const express = require('express');
const router = express.Router(); 
const route = require('../controllers/indexController')
/**
 * @route
 * @access public
 * @method GET
 */

router.get('/', route.home)

router.post('/register', route.register)

router.post('/login', route.login)

router.post('/products-created', route.products)

router.get('/readAll', route.readAll)

router.get('/seeAllProducts', route.findProducts)

module.exports = router;