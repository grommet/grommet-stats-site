import path from 'path';
import git from 'simple-git/promise';
import del from 'del';
import fs from 'fs-extra';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-stats-site.git`;
const localFolder = path.resolve('./.tmp/grommet-stats-site');
const localDist = path.resolve('./dist');
const localDistServer = path.resolve('./dist-server');
const localPackage = path.resolve('./package.json');

if (process.env.CI) {
  del(localFolder).then(() => {
    git()
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout('heroku'))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, path.join(localFolder, 'dist')))
      .then(() => fs.copy(localDistServer, path.join(localFolder, 'dist-server')))
      .then(() => fs.copy(localPackage, path.join(localFolder, 'package.json')))
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit('heroku updated'))
      .then(() => git(localFolder).push('origin', 'heroku'))
      .catch(err => console.error('failed: ', err));
  });
} else {
  console.warn('Skipping release. Release:heroku task should be executed by CI only.');
}
