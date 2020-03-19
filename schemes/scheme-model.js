const db= require('../data/db_config');

module.exports= {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};  

function find(){
  return db('schemes');
}//end find

function findById(id){
  return db('schemes')
  .where({id: id})
  .first()
  .then(res => {
    if (res !== []){
      return res;
    }else{
      return null;
    }
  })
}//end find

function findSteps(id){
  return db.select('steps.id', 'steps.step_number', 'schemes.scheme_name', 'steps.instructions')
  .from('schemes')
  .join('steps', 'steps.scheme_id', 'schemes.id')
  .where({'schemes.id': id})
  .orderBy('step_number');
}//end find

function add(schemeData){
  return db('schemes')
  .insert(schemeData);
}//end find

function update(){

}//end find

function remove(){

}//end find

