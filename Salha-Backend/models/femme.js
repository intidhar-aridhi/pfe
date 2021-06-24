
const db = require('../util/database');



module.exports = class Femme {
   
    constructor(id,nom,prenom,numtel,cle,region){
        this.id = id ;
        this.nom = this.nom;
        this.prenom = this.prenom;
        this.numtel = this.numtel;
        this.cle = this.cle;
        this.adresse = this.adresse;
      
        
        
      
     
        
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

   
static femmeProd(){
    return db.execute ('SELECT distinct femmes.* FROM femmes,production WHERE femmes.id=production.id' );
}


    static fetchAll(){
        return db.execute ('SELECT * FROM femmes');
     
    }
    static fetchfemme(id){
        return db.execute ('SELECT femmes.id,femmes.nom,femmes.prenom,femmes.adresse,femmes.numtel,femmes.cle ,gouvernorat.nom_G As gouv FROM femmes JOIN gouvernorat ON femmes.id_G = gouvernorat.id_G  WHERE id =?',[id]);

    
    }
   
     static getCle()
     {
         return db.execute('SELECT max(id) FROM femmes ');
     }
    static post(nom,prenom,numtel,adresse,id_G,image_F){
        return db.execute('INSERT INTO femmes (nom,prenom,numtel,adresse,id_G,image_F) VALUES (?,?,?,?,?,?)',[nom,prenom,numtel,adresse,id_G,image_F]);
    }
    static postC(cle,id){
        return db.execute('UPDATE femmes SET cle= ?  WHERE id = ?', [cle,id]);
    }
    static update(id, nom,prenom,numtel,adresse,id_G) {
        return db.execute('UPDATE femmes SET nom = ?, prenom= ? ,numtel= ?  , adresse= ?, id_G=?  WHERE id = ?', [nom,prenom,numtel,adresse,id_G,id]);
      }
    
      static delete(id) {
        return db.execute('DELETE FROM femmes WHERE id = ?', [id]);
      }
  
  
      
  
};
