const { isValidObjectId } = require('mongoose')
const User  = require('../models/userModel')

exports.home   = (req,res, next) => {
  res.status(200).json('User come from Backend.')
}


exports.register = async (req,res, next) => {
  try {
    const {name,username,email,gender,location,phone, password} = req.body
    const user  =  new User({name, username, email, gender, location,phone,password})
    await user.save();
    res.status(201).json({success:true, user});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({success:false, error:error.message})
  }
}

exports.login = async (req, res, next) => {
  try {
    const {username,email, password} = req.body
    const user = await User.findOne({ $or:[{username:username},{email:email}]}).select('+password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found. Please enter valid user details.' });
    }

    if (user.password !== password) {
      return res.status(404).json({ success: false, message: 'Incorrect password. Please enter correct password.' });
    }

    res.status(200).json({ success: true, message: 'Authentication successful. Valid user.' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error: error.message });
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