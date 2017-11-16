import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

import GithubOrgStats from 'github-org-stats';

const PORT = process.env.PORT || 8102;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_ORGANIZATION = process.env.GITHUB_ORGANIZATION || 'grommet';

const app = express()
  .use(compression())
  .use(cookieParser())
  .use(morgan('tiny'))
  .use(bodyParser.json());

app.get('/api/stats', (req, res) => {
  const githubOrgStats = new GithubOrgStats(GITHUB_TOKEN, GITHUB_ORGANIZATION);
  githubOrgStats
    .authenticate()
    .then(() => githubOrgStats.get())
    .then(result => res.send(result))
    .catch((error) => {
      console.log(error);
      res.status(403).send('You do not have a valid token');
    });
});

// UI
app.use('/', express.static(path.join(__dirname, '/../dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started at http://localhost:${PORT}`);
