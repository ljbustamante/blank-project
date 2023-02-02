![Sabbi Logo](.github/images/logo-white.svg)

**sabbi.la**


## Quick start

First, make sure you have installed Node 16.x or later and the classic [yarn](https://classic.yarnpkg.com/pt-BR/docs/install) dependency manager version.

After setting everything up, clone this repo:

```
$ git clone git@github.com:ljbustamante/blank-project.git
```

Install all dependencies:

```
$ yarn bootstrap
```

Run the app:

```
$ yarn dev:server
```

And enjoy it! ;)


## Development workflow

By definition, the sabbipro-api follows the [Trunk Based Development](https://trunkbaseddevelopment.com/). The following image sumarizes how it works:

![Trunk Based Development](https://trunkbaseddevelopment.com/trunk1b.png)

You can dive into the details in [this page](https://trunkbaseddevelopment.com/).


## Deployment 🚀

We use [GitHub Actions](https://docs.github.com/es/actions/quickstart) to deploy our new releases. To ensure that everything works well, follow the development workflow.

#### Release to Staging:

In order for you to release a Staging version, you send your commit into main branch. After that, the GithubAction should begin the deployment.

#### Release to Production:

If all your tests are approved and you are ready to take your change to production, you just need create a release from the last tag.
