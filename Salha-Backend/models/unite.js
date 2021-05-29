const db = require('../util/database');
module.exports = class Unite {
    constructor(id_U,nom_U,image_U){
        this.id_U = id_U ;
        this.nom_U = this.nom_U;
        this.image_U = this.image_U; 
    
    }
   



static fetchAll(){
        return db.execute ('SELECT * FROM unite');
     
}
static getunite(id_U){
    return db.execute ('SELECT * FROM unite WHERE id_U =?',[id_U]);
}
static post (nom_U,image_U){
    return db.execute('INSERT INTO unite (nom_U,image_U) VALUES (?,?)',
    [nom_U,image_U]);
}



static update(id_U, nom_U,image_U) {
        return db.execute('UPDATE unite SET nom_U = ?, image_U= ?  WHERE id_U = ?', [nom_U,image_U,id_U]);
      }
    
      static delete(id_U) {
        return db.execute('DELETE FROM unite WHERE id_U = ?', [id_U]);
      }





}