const express = require('express');
const femmeController = require('../controllers/femme');
const router = express.Router();

router.post('/',femmeController.postfemme);
router.get('/femmeprod',femmeController.jibfemme);
router.put('/', femmeController.putfemme);
router.get('/:id',femmeController.fetchfemme);
//router.get('/:id',femmeController.fetchidgouvmelfemme);
router.post('/gouv',femmeController.getgouvN);
router.get('/', femmeController.getAllfemmes);
router.delete('/:id', femmeController.deletefemme);


module.exports = router;