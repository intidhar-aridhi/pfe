const db = require('../util/database');

module.exports = class prod {
 
  


static selectprod(id ,stat,type){
    return db.execute ('SELECT * FROM production WHERE id=? AND status=? AND type_production=?',[id,stat,type]);
 
}
static  selectproduit(id_production){
    return db.execute ('SELECT * FROM detail_production WHERE id_production=?' ,[id_production]);
 
}
static productionparid(id){
    return db.execute (' SELECT * FROM production WHERE id_production =?' ,[id]);
}

}