var expect = require('chai').expect;
var request = require('superagent');

describe('GET /api/users', function() {
  it('should get users', function(done) {
    request
      .get('http://localhost:3000/api/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res.ok).to.equal(true);
        expect(res.status).to.equal(200);
        done();
      })
  });
});
