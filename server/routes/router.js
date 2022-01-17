const express = require('express');
const route = express.Router();

const services = require('../services/render');

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

//must export the routes - to be imported in server
module.exports = route