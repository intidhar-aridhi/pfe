const prod = require('../models/productionModel');
const produit = require('../models/produit');
const unite = require('../models/unite');
const femme = require('../models/femme');
const{ validationResult } = require('express-validator');

exports.getP= async(req,res,next) =>{
    try {var TAB =[];
        let [listeFemmes]= await femme.fetchAll();
        for(var k=0;k<listeFemmes.length;k++)
        {
         let  id=listeFemmes[k].id;
  
      let [r]=await prod.selectprod(id ,"prêt","output");
      
      
  for(var i=0;i<r.length;i++)
  {    
     let a=r[i].id_production;
    ////
    let Som=r[i].somme_prix;
    let d=r[i].date_transaction;
    let [er]=await prod.selectproduit(a);
  
    for(var j=0;j<er.length;j++)
  {
 
    let q=er[j].quantite;
    let s=er[j].somme;
    let [prod]= await produit.fetchproduit(er[j].id_produit);
  let n=prod[0].nom_produit;

   let p=prod[0].prix_P;
  let idU=prod[0].id_U;
  let un= await unite.getunite(idU);
  
  unit=un[0][0].nom_U;
  let json = {id_femme:`${id}`,
                nom_produit:n,
                quantite:`${q}`,
                unite:unit,
                  prix:`${p}` ,
                date:`${d}`,
                somme:`${s}`,
                sommePrix:`${Som}`,
                id_production:`${a}`
              };
  

      TAB.push(json);
    
  }
}   
  }
  
  
  res.status(200).json(TAB);   
      }catch(err) {
          if(!err.statuscode){
              err.statuscode = 500
          }
   next(err);
      
          }
  
  }
  exports.getpf= async(req,res,next)=>{
try{
    id=req.params.id;
  TAB=[];
    let [r]=await prod.selectprod(id ,"prêt","output");
    
    
for(var i=0;i<r.length;i++)
{   let Som=r[i].somme_prix;
  let d=r[i].date_transaction;
   let a=r[i].id_production;
   let json = {
  
   date:`${d}`,
  
   sommePrix:`${Som}`,
   id_production:`${a}`
 };


TAB.push(json);
}

res.status(200).json(TAB);   
      }catch(err) {
          if(!err.statuscode){
              err.statuscode = 500
          }
   next(err);
      
          }
  };
  exports.getproduitp= async(req,res,next)=>{
    try{
        let a=req.params.id_production;
        
    TAB=[];
        let [er]=await prod.selectproduit(a);
      
        for(var j=0;j<er.length;j++)
      {
     
        let q=er[j].quantite;
        let s=er[j].somme;
        let [prod]= await produit.fetchproduit(er[j].id_produit);
      let n=prod[0].nom_produit;
    
       let p=prod[0].prix_P;
      let idU=prod[0].id_U;
      let un= await unite.getunite(idU);
      
      unit=un[0][0].nom_U;
      let json = {  nom_produit:n,
                    quantite:`${q}`,
                    unite:unit,
                      prix:`${p}` ,
                    somme:`${s}`,
                  };
    
    
    TAB.push(json);
    }
    
    res.status(200).json(TAB);   
          }catch(err) {
              if(!err.statuscode){
                  err.statuscode = 500
              }
       next(err);
          
              }
      };


      exports.fetchproductionparleurid= async(req, res, next) => {
        try {
        const [uneproduction] = await prod.productionparid(req.params.id);
        res.status(200).json(uneproduction);
        
        }catch(err) {
            if(!err.statuscode){
                err.statuscode = 500
            }
            next(err);
        
            }
         
        };