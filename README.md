# grommet-stats-site

This is the source code for the grommet org stats

To run this application, cd to the grommet-stats-site directory and execute the following commands:

  1. Install NPM modules

```
    $ npm install (or yarn install)
```

  2. Set the GITHUB_TOKEN environment variable for github authentication. If running behind a corporate firewall, you may need to set the HTTPS_PROXY environment variable as well.

  3. Build and start the back-end dev server for retrieving data:

```
    $ npm run dev-server
```

  4. Build and start the front-end dev server:

```
    $ npm run dev
```

  5. Build the app for production

```
    $ npm run dist
```

  5. Test and run linters:

```
    $ npm test
```
