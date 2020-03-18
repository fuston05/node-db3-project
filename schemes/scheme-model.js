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
  .first();
}//end find

function findSteps(){

}//end find

function add(){

}//end find

function update(){

}//end find

function remove(){

}//end find

