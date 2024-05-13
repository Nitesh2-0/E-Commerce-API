require('dotenv').config({path:'./.env'});
require('ejs')
const express = require('express'); 
const path = require('path')
const app = express(); 
const PORT = process.env.PORT;
const indexRouter = require('./routes/indexRouter')

app.use(require('morgan')('tiny'))

//connection establishing with database
require('./models/connection').mongoconnection();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/user',indexRouter);

app.all('*',(req,res)=> {
  res.status(404).json({url:req.url,message:'Page Not Found'})
})


app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
})