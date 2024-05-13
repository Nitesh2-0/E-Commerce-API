const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [6, 'at least 6 character'],
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is Required"],
    minLength: [6, "username must be atleast 6 character"],
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required.'],
    validate: {
      validator: function (value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: 'Please fill a valid email address'
    },
    trim: true
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['male', 'female', 'others'],
  },
  // location: {
  //   type: String,
  //   // required: [true, 'Location is required']
  // },
  // phone: {
  //   type: Number,
  //   validate: {
  //     validator: function (v) {
  //       return /^\d{10}$/.test(v);
  //     },
  //     message: 'Phone Number must be exactly 10 digits.'
  //   },
  //   // required: [true, 'Phone Number is Required.']
  // },
  password: {
    type: String,
    trim: true,
    select: false,
    required: [true, 'password is required.'],
    minLength: [6, "paaword must be atleast 6 character"],
  },
  profileImg:{
    type:String,
    default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFX-gwL4XeZEdf6PldRDWQ3efNrHvDm4CM74tq3pW0xEgKi8t4qzfgdfgrx5gVTevQ9k&usqp=CAU'
  },
})

const User = mongoose.model("user", userModel);
module.exports = User