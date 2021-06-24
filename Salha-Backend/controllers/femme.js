const femme = require('../models/femme');
const gouvernorat = require('../models/gouvernorat');


exports.getAllfemmes = async(req, res, next) => {
try {
const [allfemmes] = await femme.fetchAll();
res.status(200).json(allfemmes);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
}; 
exports.femmeayantproduction = async(req, res, next) => {
  try {
  const [allfemmes] = await femme.femmeProd();
  res.status(200).json(allfemmes);
  
  }catch(err) {
      if(!err.statuscode){
          err.statuscode = 500
      }
      next(err);
  
      }
   
  }; 
exports.fetchfemme= async(req, res, next) => {
  try {
  const [unefemme] = await femme.fetchfemme(req.params.id);
  res.status(200).json(unefemme);
  
  }catch(err) {
      if(!err.statuscode){
          err.statuscode = 500
      }
      next(err);
  
      }
   
  };


  exports.getgouvN= async(req, res, next) => {
    try{
   
      const nom=req.body.gouv;
      const gouve = await femme.getgouvernoratparleurnom(nom);
    
      res.status(200).json(gouve[0][0]);

    }catch(err){
      if(!err.statuscode){
        err.statuscode = 500

      }
      next(err);

    }
  }
exports.postfemme = async (req, res, next) => {
    try {
      const Gouv =await femme.getgouvernoratparleurnom(req.body.gouv);
  if (Gouv[0].length !==1)
  {  
    const error =new Error('gouvernorat  n\'existe pas');
    error.statusCode=401;
    throw error;
  }else {

    const storedGouv =Gouv[0][0]; 
    const id_G=storedGouv.id_G;
 
      const postResponse = await femme.post(req.body.nom,req.body.prenom,req.body.numtel,req.body.adresse,id_G,req.body.image_F);
      let id_Max= await femme.getCle();
      id_Max=id_Max[0][0]['max(id)'];
      
      let ch=id_Max.toString();
     let s="0";
     
     while(ch.length !=6)
      {
       ch=s.concat(ch);
      }
       
      const repfemme= await femme.postC(ch,id_Max);
      res.status(200).json(repfemme)
    }
      
  }catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  exports.putfemme = async (req, res, next) => {
    try {
      const Gouv =await femme.getgouvernoratparleurnom(req.body.gouv);
      if (Gouv[0].length !==1)
      {  
        const error =new Error('gouvernorat  n\'existe pas');
        error.statusCode=401;
        throw error;
      }else {
    
        const storedGouv =Gouv[0][0]; 
        const id_G=storedGouv.id_G;
     
      const putResponse = await femme.update(req.body.id, req.body.nom ,req.body.prenom,req.body.numtel ,req.body.region,id_G);
      res.status(200).json(putResponse);}
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deletefemme = async (req, res, next) => {
    try {
      const deleteResponse = await femme.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

   