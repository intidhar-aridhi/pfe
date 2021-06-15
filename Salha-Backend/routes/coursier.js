const express = require('express');
const { body } = require('express-validator');                    
const coursier = require('../models/coursier');

const coursierController = require('../controllers/coursier');
const router = express.Router();
router.get('/', coursierController.getAllcoursiers);
router.get('/:id',coursierController.fetchc);
//router.post('/',coursierController.postcoursier);


  router.post('/ajouter',[
   body('nom').trim().not().isEmpty(),
  body('prenom').trim().not().isEmpty(),
  body('numtel').trim().not().isEmpty(),

  body('email').isEmail().withMessage('entre email valide')
  .custom(async (email) => {
   const Coursier =await coursier.find(email);

  if(Coursier[0].length >0){
    return Promise.reject('Email existe déja !')
   }
  })
  .normalizeEmail(),
  
body('password').trim().isLength({ min: 6 }),
],coursierController.signup
  );
 
 
router.put('/', coursierController.putcoursier);


router.delete('/:id', coursierController.deletecoursier);
router.post('/login',coursierController.login);

module.exports = router;