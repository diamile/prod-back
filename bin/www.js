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
    
}).listen(80,()=>{console.log('server is running')})



const options = {key:env.key,cert:env.cert}

const serverHttps = https.createServer(options,app);
serverHttps.listen(443)





