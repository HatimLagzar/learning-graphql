module.exports = {
  todos: (parent, args, { dataSources }) => {
    return dataSources.todoAPI.getAll();
  },
  todoById: (parent, { id }, { dataSources }) => {
    return dataSources.todoAPI.findById(id);
  },
  users: (parent, args, { dataSources }) => {
    return dataSources.userAPI.getAll();
  },
  userById: (parent, { id }, { dataSources }) => {
    return dataSources.userAPI.findById(id);
  },
};
