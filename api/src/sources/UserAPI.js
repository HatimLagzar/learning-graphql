const { RESTDataSource } = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = 'https://jsonplaceholder.typicode.com/users';
  }

  async getAll() {
    return await this.get('/');
  }

  async findById(id) {
    return await this.get('/' + id);
  }
}

module.exports = UserAPI;
