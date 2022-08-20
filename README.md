# Buz Documentation

![honey](static/img/buzz.png)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The docs site is auto-deployed using [Github actions](https://github.com/silverton-io/buz-docs/blob/main/.github/workflows/deploy-docs.yml).