const db = require('../util/database');



module.exports = class Produit {
   
    constructor(id_produit,nom_produit,image_produit,nb_min){
        this.id_produit = id_produit ;
        this.nom_produit = this.nom_produit;
        this.image_produit = this.image_produit;
        this.nb_min = this.nb_min;
        
    }
 
    static fetchAll(){
        return db.execute ('SELECT * FROM produit');
     
    }
    static getuniteparleurnom(nom_U) {
        return db.execute ('SELECT * FROM unite WHERE nom_U =?' ,[nom_U]);
    }
    static fetchproduit(id){
        return db.execute ('SELECT * FROM produit WHERE id_produit =?',[id]);
    }
    static post(nom_produit,image_produit,nb_min,prix_P,id_U){
        return db.execute('INSERT INTO produit (nom_produit,image_produit,nb_min,prix_P,id_U) VALUES (?,?,?,?,?)',[nom_produit,image_produit,nb_min,prix_P,id_U]);
    }
    static update(id_produit, nom_produit,image_produit,nb_min,prix_P) {
        return db.execute('UPDATE produit SET nom_produit = ?,image_produit = ?,nb_min = ?,prix_P = ?  WHERE id_produit = ?', [nom_produit,image_produit,nb_min,prix_P,id_produit]);
      }
    
      static delete(id_produit) {
        return db.execute('DELETE FROM produit WHERE id_produit = ?', [id_produit]);
      }
      
  
};