
const express = require('express');
const { body } = require('express-validator'); 

const uniteController = require('../controllers/unite');
const routerU = express.Router();
routerU.get('/', uniteController.getAllunites);
routerU.put('/', uniteController.putunit);
routerU.post('/',uniteController.postunite);
routerU.get('/:id_U',uniteController.getuniteparid);
routerU.delete('/:id_U', uniteController.deleteunite);

module.exports = routerU;