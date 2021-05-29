
const db = require('../util/database');



module.exports = class Femme {
   
    constructor(id,nom,prenom,numtel,cle,region){
        this.id = id ;
        this.nom = this.nom;
        this.prenom = this.prenom;
        this.numtel = this.numtel;
        this.cle = this.cle;
        this.region = this.region;
      
        
        
      
     
        
    }
    static findG(cle_G){
        return db.execute(
            'SELECT * FROM gouvernorat WHERE cle_G = ? ',[cle_G]);
        
    }
    static fetchFemme(cle){
        return db.execute(
            'SELECT * FROM femmes WHERE cle = ? ',[cle]);
        
    }


    static getgouvernoratparleurnom(nom_G) {
        return db.execute ('SELECT * FROM gouvernorat WHERE nom_G =?' ,[nom_G]);
    }

   



    static fetchAll(){
        return db.execute ('SELECT * FROM femmes');
     
    }
    static fetchfemme(id){
        return db.execute ('SELECT * FROM femmes WHERE id =?',[id]);
    }
     static getCle()
     {
         return db.execute('SELECT max(id) FROM femmes ');
     }
    static post(nom,prenom,numtel,region,id_G){
        return db.execute('INSERT INTO femmes (nom,prenom,numtel,region,id_G) VALUES (?,?,?,?,?)',[nom,prenom,numtel,region,id_G]);
    }
    static postC(cle,id){
        return db.execute('UPDATE femmes SET cle= ?  WHERE id = ?', [cle,id]);
    }
    static update(id, nom,prenom,numtel,cle,region) {
        return db.execute('UPDATE femmes SET nom = ?, prenom= ? ,numtel= ? , cle= ? , region= ?  WHERE id = ?', [nom,prenom,numtel,cle,region,id]);
      }
    
      static delete(id) {
        return db.execute('DELETE FROM femmes WHERE id = ?', [id]);
      }
      
  
};
