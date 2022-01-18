const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/* 
* @description: Root Route
* @method: GET /
*/
route.get('/',services.homeRoutes);

/* 
* @description: add users
* @method: GET /add-user
*/
route.get('/add-user',services.add_userRoute);

/* 
* @description: update user account
* @method: GET /update-user
*/
route.get('/update-user',services.update_userRoute);


//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

//must export the routes - to be imported in server
module.exports = route