
const express = require('express');
const { body } = require('express-validator'); 

const gouvController = require('../controllers/gouvernorat');
const routerG = express.Router();
routerG.get('/', gouvController.getAllgouvernorats);
routerG.put('/', gouvController.putgouv);
routerG.post('/',gouvController.postgouv);
routerG.get('/:id_G',gouvController.gouvparid);

routerG.delete('/:id_G', gouvController.deletegouv);



/*routerG.post('/',[
    body('nom_G').trim().not().isEmpty(),
   body('cle_G').trim().not().isEmpty(),

 ],gouvController.postgouv
   );*/
   
module.exports = routerG;