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

This may be because:

1. Windows uses the NTFS file system, which has its own way of handling file events, while Linux uses file systems like ext4 with inotify.

2. When mount a Windows directory into a Docker container, it often behaves similarly to a network file system (NFS). NFS implementations can have issues with propagating file change events promptly and reliably.

So best practice is to move the source file directory into a WSL virtual system. Alternativly, the `File Sharing` feature (acquired from Mutagen) of Docker Desktop might help, but that feature is only for paid users.