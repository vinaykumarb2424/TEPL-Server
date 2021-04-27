const express = require('express');
const router = express.Router();

const ctrlUser = require('../contollers/user.controller');

const jwtHelper = require('../config/jwt');


router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
module.exports=router;