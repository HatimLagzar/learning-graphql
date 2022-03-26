module.exports = {
  toggleIsDone: (parent, { id }, { dataSources }) => {
    return dataSources.todoAPI.toggleIsDone(id);
  },

  addTodo: (parent, { todo }, { dataSources }) => {
    return dataSources.todoAPI.addTodo(todo)
  }
}