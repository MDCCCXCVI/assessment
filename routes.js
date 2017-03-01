var request = require('superagent');

module.exports = function(app, express) {
  var api = express.Router();

  api.get('/users', function(req, res) {
    request
      .get('https://api.github.com/search/users?q=language:%3Ephp+location:%3Enairobi')
      .end(function(err, users) {
        res.json(users.body);
      });
  });

  return api;
}
