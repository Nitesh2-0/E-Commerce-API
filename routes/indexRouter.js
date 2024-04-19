const express = require('express');
const router = express.Router(); 
const User  = require('../models/userModel')

/**
 * @route
 * @access public
 * @method GET
 */


router.get('/',(req,res, next) => {
  res.status(200).json('User come from Backend.')
})

router.post('/register', async (req,res, next) => {
  try {
    const user  = await new User(req.body)
    await user.save();
    res.status(201).json({success:true, user});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false, error:error.message})
  }
})

module.exports = router;