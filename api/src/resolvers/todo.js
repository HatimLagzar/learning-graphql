module.exports = {
  async followers(todo, args, { dataSources }) {
    const users = await dataSources.userAPI.getAll();

    return users.filter((user) => {
      return todo.followers.includes(user.id);
    });
  },
};
