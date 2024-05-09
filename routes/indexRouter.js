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

router.get('/readAll', route.readAll)

module.exports = router;