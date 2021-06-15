const express = require('express');
const { body } = require('express-validator'); 

const productionController = require('../controllers/productionController');
const router = express.Router();
router.get('/getProd',productionController.getP);
router.get('/getprodbyidf/:id',productionController.getpf);
router.get('/getproduitbyidp/:id_production',productionController.getproduitp)
router.get('/:id',productionController.fetchproductionparleurid);

//router.get('/listeproduction',productionController.getListeProd);
   module.exports = router;