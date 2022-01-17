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

app.get('/',(req,res)=>{
    //res.send("Message being displayed");
    res.render('index')
});
app.get('/add-user',(req,res)=>{
    res.render('add_user')
});
app.get('/update-user',(req,res)=>{
    res.render('update_user')
});

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
