const fetch = require('isomorphic-fetch')

module.exports = (username) =>
  fetch(`https://api.github.com/users/${username}/gpg_keys`)
  .then(res => res.json())
  .then(json => {
    return json.map(data => data.raw_key)
  })
