import axios from 'axios';

module.exports = {
  getPhpDevelopers: () => {
    return axios
      .get('http://localhost:3000/api/users')
      .then(users => {
        let phpUsers = users.data;
        return phpUsers;
      })
      .catch(err => {
        return err;
      });
  }

}
