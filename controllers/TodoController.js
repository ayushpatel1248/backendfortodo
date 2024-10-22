const TodoServices = require("../services/TodoService");

const TodoController = {};

TodoController.addTodo = async (req, res) => {
  const { name } = req.body;
  const result = await TodoServices.add({name});
  console.log(result);
  res.send(result);
};
TodoController.view = async (req, res) => {
  const result = await TodoServices.view();
  res.send(result);
};

TodoController.deleteTodo = async (req, res) => {
  const { id } = req.body; 
  const result = await TodoServices.delete(id); 
  console.log(result);
  res.send(result); 
};

TodoController.editTodo = async (req, res) => {
  const { id ,updatedData} = req.body; 

  const result = await TodoServices.edit(id, updatedData);
  console.log(result);
  res.send(result);
};

module.exports = TodoController;
