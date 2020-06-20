# eslint-config

An eslint configuration for channel web projects.

## Installation
`$ npm install --dev @channel.io/eslint-config`

## Install Packages
Get peer dependency lists and install them.

`$ npm info @channel.io/eslint-config peerDependencies `

Or install with `install-peerdeps`.

`$ npx install-peerdeps --dev @channel.io/eslint-config`

See more on [guide on eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1) .

### Configure
create `.eslintrc` file and extend this library.
```js
module.exports = {
  "extends": [
    "@channel.io/eslint-config",
  ],
}

```
