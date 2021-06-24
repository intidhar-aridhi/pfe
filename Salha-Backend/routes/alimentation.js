const express = require('express');
const { body } = require('express-validator'); 

const alimentationController = require('../controllers/alimentation');
const routerAL = express.Router();
routerAL.get('/', alimentationController.getAllalimentation);
routerAL.put('/',alimentationController.putalimentation);
routerAL.post('/',alimentationController.postalimentation);
routerAL.get('/:id_alimentation',alimentationController.getalimentationparid);
routerAL.delete('/:id_alimentation', alimentationController.deletealimentation);
module.exports = routerAL;