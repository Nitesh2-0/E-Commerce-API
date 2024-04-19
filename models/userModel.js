const mongoose = require('mongoose'); 
const userModel = new mongoose.Schema({
  name:{
    type:String, 
    required:[true,"Name is required"],
    minLength:[6,'at least 6 character'],
    trim:true
  },
  username:{
    type:String,
    unique:true, 
    required:[true,"Username is Required"],
    minLength:[6,"username must be atleast 6 character"],
    trim:true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required.'],
    validate: {
        validator: function(value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: 'Please fill a valid email address'
      },
    trim: true
  },
  gender:{
    type:String, 
    required:[true,'Gender is required'],
    enum:['male','female','others'],
  },
  password:{
    type:String,
    trim:true,
    required:[true, 'password is required.'],
    minLength:[6,"paaword must be atleast 6 character"],
  }
})

const User = mongoose.model("user",userModel); 
module.exports = User