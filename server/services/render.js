// this file will allow us to render different routes

const axios = require('axios');

exports.homeRoutes = (req,res) => {
    //make a get request to the api users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            console.log(response.data)
            res.render('index',{users:response.data});
        })
        .catch(err => {
            res.send(err);
        })
    
}

exports.add_userRoute = (req,res) => {    
    res.render('add_user');
}

exports.update_userRoute = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update_user",{user:userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}