const TodoAPI = require('./TodoApi');
const UserAPI = require('./UserAPI');

module.exports = () => ({
  todoAPI: new TodoAPI(),
  userAPI: new UserAPI(),
});
