require('dotenv').config({path:'./.env'});
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT;
const indexRouter = require('./routes/indexRouter')

app.use(require('morgan')('tiny'))

//connection establishing with database
require('./models/connection').mongoconnection();

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))


app.use('/api/user',indexRouter);


app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
})