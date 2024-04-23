const User  = require('../models/userModel')

exports.home   = (req,res, next) => {
  res.status(200).json('User come from Backend.')
}


exports.register = async (req,res, next) => {
  try {
    const user  =  new User(req.body)
    await user.save();
    res.status(201).json({success:true, user});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false, error:error.message})
  }
}


exports.readAll = async (req,res) =>{
  try {
    const users = await User.find(); 
    res.status(200).json({success:true, users});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false, error:error.message})
  }
}