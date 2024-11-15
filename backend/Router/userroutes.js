const express = require('express');
const { adduser,getAllUsers,deleteUserById,updateUserById } = require('../Controller/usercontroller'); // Corrected import

const Router = express.Router();

Router.post('/add', adduser); // Now this correctly references the function
Router.get('/getall',getAllUsers);
Router.delete('/delete/:id',deleteUserById);
Router.put('/update/:id',updateUserById);

module.exports = Router;