const db = require('../util/database');
module.exports = class Coursier {
    constructor(id,nom,prenom,numtel,email,password){
        this.id = id ;
        this.nom = this.nom;
        this.prenom = this.prenom;
        this.numtel = this.numtel;
        this.email = this.email;
        this.password=this.password;
        
    }
    static fetchAll(){
        return db.execute (
            'SELECT * FROM coursiers');
     
    }
    static find(email){
        return db.execute(
            'SELECT * FROM coursiers WHERE email = ? ',[email]);
        
    }
    
   static save (nom,prenom,numtel,email,password){
       return db.execute('INSERT INTO coursiers (nom,prenom,numtel,email,password) VALUES (?,?,?,?,?)',
       [nom,prenom,numtel,email,password]);
   }
 
    
    static post(nom,prenom,numtel,email,password){
        return db.execute('INSERT INTO coursiers (nom,prenom,numtel,email,password) VALUES (?,?,?,?,?)',
        [nom,prenom,numtel,email,password]);
    }
    static update(id, nom,prenom,numtel,email,password) {
        return db.execute('UPDATE coursiers SET nom = ?, prenom= ? ,numtel= ? , email= ? , password=?  WHERE id = ?', 
        [nom,prenom,numtel,email,password,id]);
      }
    
      static delete(id) {
        return db.execute('DELETE FROM coursiers WHERE id = ?', [id]);
      }
      static fetchcoursier(id){
        return db.execute ('SELECT * FROM coursiers WHERE id =?',[id]);
    }

  
};