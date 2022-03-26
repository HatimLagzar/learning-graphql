const { DataSource } = require('apollo-datasource');
const todos = require('../data/todos.json');
const random = require('randomint');


class TodoAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getAll() {
    return todos;
  }

  findById(id) {
    return todos.find((todo) => todo.id === parseInt(id));
  }

  toggleIsDone(id) {
    let todo = todos.find(todo => todo.id === parseInt(id))
    if (todo !== null) {
      todo.isDone = !todo.isDone
    }

    return todo
  }

  addTodo(todo) {
    todo.id = random(5)
    todo.isDone = false
    todos.push(todo)

    return todo
  }
}

module.exports = TodoAPI;
