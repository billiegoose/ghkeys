# ghkeys

Obtain the PGP keys of your fellow Githubbers using the Github API

## CLI usage

`ghkeys` takes a single argument, the github username, and outputs all the PGP keys (newline separated) on stdout.

```sh
npx ghkeys [github username] | gpg --import
```

## JS API

```js
const ghkeys = require('ghkeys')

ghkeys(username).then(keys => {
  for (let key of keys) {
    // do something with the key
    console.log(key)
  }
})
```
