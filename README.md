# Learn Docker

## Notes

### Nodemon with WSL

In Windows with WSL, to make Nodemon properly auto restart, have to add -L option to enable Chokidar's polling. See [official reference](https://github.com/remy/nodemon?tab=readme-ov-file#application-isnt-restarting). For example, in package.json, it should be:
```
  ...
  "scripts": {
    "start:dev": "nodemon --env-file=.env.development -L src/index.js",
    ...
  },
  ...
```
. Notice the **-L** in `nodemon --env-file=.env.development -L src/index.js`.

This might be because WSL is using some bridging between the Linux system and the host system (Windows).