const coursier = require('../models/coursier');
const jwt = require('jsonwebtoken');
const{ validationResult } = require('express-validator');
const bcrypt =require('bcryptjs');


  exports.signup= async(req,res,next)=>{

  const errors= validationResult(req);

  if (!errors.isEmpty()) return
  const nom=req.body.nom;
  const prenom=req.body.prenom;
  const numtel=req.body.numtel;
  const email=req.body.email;
  const password=req.body.password;

 try{
  
  let hashedPassword = await bcrypt.hash(password,12);

const result =await coursier.save(nom,prenom,numtel, email,hashedPassword);
res.status(201).json({message:'utilisateur enregistrer'})
}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  }
  }
 
exports.getAllcoursiers = async(req, res, next) => {
try {
const [allcoursiers] = await coursier.fetchAll();
res.status(200).json(allcoursiers);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};
exports.fetchc= async(req, res, next) => {
  try {
  const [uncoursier] = await coursier.fetchcoursier(req.params.id)
  res.status(200).json(uncoursier);
  
  }catch(err) {
      if(!err.statuscode){
          err.statuscode = 500
      }
      next(err);
  
      }
   
  };

exports.login=async(req,res,next)=>{

  const email=req.body.email;
  const pass =req.body.password;
  try{
    const Coursier = await coursier.find(email);
      

    if (Coursier[0].length !==1)
    {  
      const error =new Error('email n\'existe pas');
      error.statusCode=401;
      throw error;
    }
    const storedUser =Coursier[0][0];

    
    let isEqual =await bcrypt.compare(pass, storedUser.password);
    

  if(!isEqual){
      const error =new Error('mot de passe  n\'existe pas');
      error.statusCode=401;
      throw error;
    }
   
    
    
      const token =jwt.sign(
        {
          email:storedUser.email,
          userId:storedUser.id,
          userNom:storedUser.nom
        },
        'secretfortoken',
        {expiresIn:'1h'}
      );
      
      res.status(200).json({token,userId:storedUser.id,userNom:storedUser.nom});
    
    }catch(err){
      if(!err.statusCode){
        err.statusCode =500;
      }
      next(err);
    }
  
};

exports.postcoursier = async (req, res, next) => {
    try {
      const postResponse = await coursier.post(req.body.nom,req.body.prenom,req.body.numtel,req.body.email,req.body.password);
      
      res.status(201).json(postResponse);
      
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.putcoursier = async (req, res, next) => {
    try {
      const putResponse = await coursier.update(req.body.id, req.body.nom ,req.body.prenom,req.body.numtel , req.body.email,req.body.password);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deletecoursier = async (req, res, next) => {
    try {
      const deleteResponse = await coursier.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };