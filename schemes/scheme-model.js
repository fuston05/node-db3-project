const db= require('../data/db_config');

module.exports= {
  find,
  findById,
  findSteps,
  add,
  addStep,
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

function addStep(stepData, id){
  return db('steps')
  .join('schemes', 'schemes.id', id)
  .insert(stepData)
  // .where({id: scheme_id})
}//end find

function update(changes, id){
  return db('schemes')
  .where({id})
  .update(changes)
  .then(() => {
    return findById(id);
  })
}//end find

function remove(id){
  let toBeRemoved= findById(id) || null;
  return db('schemes')
  .where({id})
  .del(id)
  .then((res) => {
    return toBeRemoved;
  })
}//end find

