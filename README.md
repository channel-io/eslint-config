# eslint-config-channel

An eslint configuration for channel web projects.

## Installation
`$ npm install --dev @channel.io/eslint-config-channel`

## Install Packages
Get peer dependency lists and install them.

`$ npm info @channel.io/eslint-config-channel peerDependencies `

Or install with `install-peerdeps`.

`$ npx install-peerdeps --dev @channel.io/eslint-config-channel`

See more on [guide on eslint-airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1) .

### Configure
create `.eslintrc` file and extend this library.
```js
module.exports = {
  "extends": [
    "eslint-config-channel",
  ],
}

```