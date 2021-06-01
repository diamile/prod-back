const http = require('http');
const app = require('../app')
const fs = require('fs')

const env = require(`../environments/${process.env.NODE_ENV}.js`)
console.log('env',env)

const https = require('https')
const serverHttp = http.createServer((req,res)=>{
        console.log('http server')
        console.log(`https://${ req.headers.host }${ req.url }`)
        res.writeHead('301', { Location: `https://${ req.headers.host }${ req.url }` })
        res.end();
    
}).listen(env.porthttp,()=>{console.log('server is running')})



const options = {key:fs.readFileSync(env.key),cert:fs.readFileSync(env.cert)}

const serverHttps = https.createServer(options,app);
serverHttps.listen(env.porthttps)





