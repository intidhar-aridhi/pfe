const db = require('../util/database');



module.exports = class Produit {
   
    constructor(id_alimentation,nom_A,image_A,unite_al,nb_min){
        this.id_alimentation = id_alimentation ;
        this.nom_A = this.nom_A;
        this.image_A = this.image_image_A;
        this.unite_al = this.unite_al;
        this.nb_min = this.nb_min;
        
    }
 
    static fetchAll(){
        return db.execute ('SELECT * FROM alimentation');
    }
    static getalimentation(id_alimentation){
        return db.execute ('SELECT * FROM alimentation WHERE id_alimentation =?',[id_alimentation]);
    }
  
    static post(nom_A,image_A,unite_al,nb_min){
        return db.execute('INSERT INTO alimentation (nom_A,image_A,unite_al,nb_min) VALUES (?,?,?,?)',[nom_A,image_A,unite_al,nb_min]);
    }
    static update(id_alimentation,nom_A,image_A,nb_min,unite_al) {
        return db.execute('UPDATE alimentation SET nom_A = ?,image_A = ?,nb_min = ? ,unite_al = ? WHERE id_alimentation = ?', [nom_A,image_A,nb_min,unite_al,id_alimentation]);
      }
    
      static delete(id_alimentation) {
        return db.execute('DELETE FROM alimentation WHERE id_alimentation = ?', [id_alimentation]);
      }
      
  
};