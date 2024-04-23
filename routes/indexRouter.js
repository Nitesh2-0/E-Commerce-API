const express = require('express');
const router = express.Router(); 
const {home,register, readAll} = require('../controllers/indexController')
/**
 * @route
 * @access public
 * @method GET
 */


router.get('/', home)

router.post('/register', register)

router.get('/readAll', readAll)

module.exports = router;