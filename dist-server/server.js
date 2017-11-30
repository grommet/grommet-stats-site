'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _githubOrgStats = require('github-org-stats');

var _githubOrgStats2 = _interopRequireDefault(_githubOrgStats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MOCK_API = process.env.MOCK_API;
var PORT = process.env.PORT || 8102;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;
var GITHUB_ORGANIZATION = process.env.GITHUB_ORGANIZATION || 'grommet';

var githubOrgStats = void 0;
if (!MOCK_API) {
  githubOrgStats = new _githubOrgStats2.default(GITHUB_TOKEN, GITHUB_ORGANIZATION);
  githubOrgStats.authenticate();
}

var app = (0, _express2.default)().use((0, _compression2.default)()).use((0, _cookieParser2.default)()).use((0, _morgan2.default)('tiny')).use(_bodyParser2.default.json());

app.get('/api/stats', function (req, res) {
  if (MOCK_API) {
    res.send({
      totalStars: 100000
    });
  } else {
    githubOrgStats.get().then(function (result) {
      return res.send(result);
    }).catch(function (error) {
      console.log(error);
      res.status(403).send('You do not have a valid token');
    });
  }
});

// UI
app.use('/', _express2.default.static(_path2.default.join(__dirname, '/../dist')));
app.get('/*', function (req, res) {
  res.sendFile(_path2.default.resolve(_path2.default.join(__dirname, '/../dist/index.html')));
});

var server = _http2.default.createServer(app);
server.listen(PORT);

console.log('Server started at http://localhost:' + PORT);
//# sourceMappingURL=server.js.map