const produit = require('../models/produit');



exports.getAllproduit = async(req, res, next) => {
try {
const [allproduit] = await produit.fetchAll();
res.status(200).json(allproduit);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};
exports.fetchproduit= async(req, res, next) => {
  try {
  const [unproduit] = await produit.fetchproduit(req.params.id);
  res.status(200).json(unproduit);
  
  }catch(err) {
      if(!err.statuscode){
          err.statuscode = 500
      }
      next(err);
  
      }
   
  };
exports.postproduit = async (req, res, next) => {
  try {
    const Unit =await produit.getuniteparleurnom(req.body.unit);
if (Unit[0].length !==1)
{  
  const error =new Error('unite  n\'existe pas');
  error.statusCode=401;
  throw error;
}else {

  const storedUnit =Unit[0][0]; 
  const id_U=storedUnit.id_U;

    const postResponse = await produit.post(req.body.nom_produit,req.body.image_produit,req.body.nb_min,req.body.prix_P,id_U);
   if(postResponse[0].insertId!=null){
     res.status(200).json({'message':'produit ajoutée avec succées '})
   }
   
  }
    
}catch (err) {
   console.log(err)
    next(err);
  }
  };
  exports.putproduit = async (req, res, next) => {
    try {
      const putResponse = await produit.update(req.body.id_produit, req.body.nom_produit,req.body.image_produit,req.body.prix_P );
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deleteproduit = async (req, res, next) => {
    try {
      const deleteResponse = await produit.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };