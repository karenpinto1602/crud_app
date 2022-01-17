const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080;

//log requests
app.use(morgan('tiny')) //will print type of requests

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs"); //can also use HTMl or pug in place of ejs
//app.set("views",path.resolve(__dirname,"views/eje")); //if a separate folder with all eje files are made, here aren't doing that

//load asset
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load Routers
app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
