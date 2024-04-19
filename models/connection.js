const mongoose = require('mongoose'); 

exports.mongoconnection = async () => {
  try{
    await mongoose.connect(process.env.URI); 
    console.log("Database connected")
  }catch(error){
    console.log(error.message);
  }
}