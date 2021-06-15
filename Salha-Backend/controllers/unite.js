const unite = require('../models/unite');
const { validationResult } = require('express-validator'); 

exports.postunite= async(req,res,next)=>{

  const errors= validationResult(req);

  if (!errors.isEmpty()) return
  const nom_U =req.body.nom_U;
  const image_U =req.body.image_U;

 try{
 

 
const result =await unite.post(nom_U,image_U);
console.log('+++++++++++++++++++++++++ res post unite ',result[0].insertId)
res.status(201).json({message:'unite enregistrer',id: result[0].insertId})
}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  }
  }
 
exports.getAllunites = async(req, res, next) => {
try {
const [allunites] = await unite.fetchAll();
res.status(200).json(allunites);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};
exports.getuniteparid= async(req, res, next) => {
  try {
  const [uneunite] = await unite.getunite(req.params.id_U);
  res.status(200).json(uneunite);
  
  }catch(err) {
      if(!err.statuscode){
          err.statuscode = 500
      }
      next(err);
  
      }
   
  };


  exports.putunit = async (req, res, next) => {
    try {
      const putResponse = await unite.update(req.body.id_U, req.body.nom_U ,req.body.image_U);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deleteunite = async (req, res, next) => {
    try {
      const deleteResponse = await unite.delete(req.params.id_U);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };