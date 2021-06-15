
const express = require('express');
const { body } = require('express-validator'); 

const produitController = require('../controllers/produit');
const routerP = express.Router();
routerP.get('/', produitController.getAllproduit);
routerP.get('/:id',produitController.fetchproduit);
routerP.put('/', produitController.putproduit);
routerP.post('/',produitController.postproduit);

routerP.delete('/:id', produitController.deleteproduit);



/*routerG.post('/',[
    body('nom_G').trim().not().isEmpty(),
   body('cle_G').trim().not().isEmpty(),

 ],gouvController.postgouv
   );*/
   
module.exports = routerP;