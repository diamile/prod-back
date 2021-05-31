const env = process.env.NODE_ENV
const fs = require('fs')
const path = require('path')

module.exports = {
    key:fs.readFileSync(path.join(__dirname,"../ssl/local.key")),
    cert:fs.readFileSync(path.join(__dirname,"../ssl/local.crt")),
    porthttp:3003,
    porthttps:3001
}