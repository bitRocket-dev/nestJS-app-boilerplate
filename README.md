<!-- @format -->

# Stack

<p >
  <a href="http://nestjs.com/" target="blank" style="margin-right:2px" ><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
    <a href="https://nodejs.org/en/about/" target="blank" style="margin-right:2px"><img src="https://cosmocode-assets.s3.amazonaws.com/stacks/node.js.svg" width="50" alt="Node Logo"/></a>
      <a href="https://www.docker.com/" target="blank" style="margin-right:2px"><img src="https://cosmocode-assets.s3.amazonaws.com/stacks/docker.svg" width="50" alt="Docker Logo"/></a>
           <a href="https://www.docker.com/" target="blank" style="margin-right:2px"><img src="https://cosmocode-assets.s3.amazonaws.com/stacks/postgresql.svg" width="50" alt="Postgres Logo"/></a>
  <a href="https://www.mongodb.com/" target="blank"style="margin-right:2px" ><img src="https://cosmocode-assets.s3.amazonaws.com/stacks/mongodb.svg" width="50" alt="MongoDB Logo"/></a>
<a href="https://jestjs.io/" target="blank"style="margin-right:2px" ><img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" width="42" alt="Jest Logo"/></a>
<a href="https://swagger.io/" target="blank"style="margin-right:2px" ><img src="https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png" width="50" alt="Swagger Logo"/></a>
<a href="https://eslint.org/" target="blank"style="margin:2px"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" width="56" alt="Eslint Logo"/></a>
<a href="https://www.prisma.io/" target="blank"style="margin:5px" ><img src="https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png" width="45" alt="Prisma Logo"/></a>
<a href="https://prettier.io/" target="blank"style="margin:2px" ><img src="https://brandslogos.com/wp-content/uploads/images/large/prettier-logo.png" width="50" alt="Prettier Logo"/></a>
  <a href="https://mongoosejs.com/" target="blank"  style="margin:2px" ><img src="https://cosmocode-assets.s3.amazonaws.com/stacks/mongoose.svg" width="50" alt="Mongoose Logo"/></a>

</p>

## Description

[NestJS Boilerplate](https://github.com/bitRocket-dev/nestJS-app-boilerplate) contains the essential tools for nest/mongo or nest/postgres projects.

# Treefolder

```bash
├── dist
└── src/
    ├── auth
    ├── common
    ├── providers
    ├── models/
    │   └── user/
    │       ├── controller
    │       ├── service
    │       ├── module
    │       └── interface
    └── providers/
        ├── database
        └── cache
```

For more info watch the README.md files inside each folder.

# Installation

```bash
# Setup
$ bash config.sh

────────────────────────────────────────────────
# MongoDB

- Set DATABASE_URL env:
    DATABASE_URL="mongodb://dbadmin:{username}:{password}@localhost:27017/test"

- Open "main.ts" and add the mongo connection string before bootstrap:
    mongoose.connect(process.env.DATABASE_URL);

- Import MongooseModule into "app.module.ts":
    imports: [ MongooseModule.forRoot(process.env.DATABASE_URL)]

────────────────────────────────────────────────
# Postgres

- Set DATABASE_URL env:
    DATABASE_URL="postgres://myuser:mypassword@localhost:5432/test"

- Set all DB envs:
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
```

# Build

```bash
# build
$ yarn build

# Docker build
$ docker build --tag <tagname>
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

# CLI

## Nest cli - helpers

```bash
# info
$ nest info

# help
$ nest -help
```

## Nest cli - generators

```bash
# generate module
$ nest g mo <name>

# generate service
$ nest g s <name>

# generate controller
$ nest g co <name>

# generate all
$ name=<name> nest generate:all
```

For more scripts watch the [official docs](https://docs.nestjs.com/cli/usages).

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e
```

## Configuration VSCode

- Install Prettier extension
- Go to to File -> Settings and search theme
- Click on Edit in settings.json
- Add this entry on opened file settings.json and save it.

```
  "editor.tabSize": 2,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
    "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
```

## Monitoring

```bash
# swagger:

${SERVER_URL}/api
```

## Stay in touch

- Author - [Riccardo Genova](https://github.com/riccardogenova-bitrocketdev)
- Partecipation - [Roberto La Porta](https://github.com/robertolaporta-bitrocketdev)
- Organization - [bitRocket.dev](https://github.com/bitRocket-dev)
