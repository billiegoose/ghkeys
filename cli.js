#!/usr/bin/env node
let username = process.argv[2]
const api = require('./index.js')

api(username).then(keys => console.log(keys.join('\n\n')))