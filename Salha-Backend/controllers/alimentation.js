const alimentation = require('../models/alimentation');
const { validationResult } = require('express-validator'); 

exports.postalimentation= async(req,res,next)=>{

  const errors= validationResult(req);

  if (!errors.isEmpty()) return
  const nom_A =req.body.nom_A;
  const image_A =req.body.image_A;
  const unite_al = req.body.unite_al;
  const nb_min = req.body.nb_min;


 try{
 

 
const result =await alimentation.post(nom_A,image_A,unite_al,nb_min);
res.status(201).json({message:'alimentation enregistrer'})
}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  }
  }
 
exports.getAllalimentation = async(req, res, next) => {
try {
const [allalimentations] = await alimentation.fetchAll();
res.status(200).json(allalimentations);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};
exports.getalimentationparid= async(req, res, next) => {
  try {
  const [unealimentation] = await alimentation.getalimentation(req.params.id_alimentation);
  res.status(200).json(unealimentation);
  
  }catch(err) {
      if(!err.statuscode){
          err.statuscode = 500
      }
      next(err);
  
      }
   
  };


  exports.putalimentation = async (req, res, next) => {
    try {
      const putResponse = await alimentation.update(req.body.id_alimentation, req.body.nom_A ,req.body.image_A,req.body.nb_min,req.body.unite_al);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deletealimentation = async (req, res, next) => {
    try {
      const deleteResponse = await alimentation.delete(req.params.id_alimentation);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };