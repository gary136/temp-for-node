// const names = require('./04-names')
// const sayHi = require('./05-utils')
// const data = require('./06-alternative-flavor')
// require('./07-mind-grenade')
// console.log(names)
// console.log(sayHi)
// console.log(data)
// sayHi('susan')
// sayHi(names.john)

// const os = require('os')
// const user = os.userInfo()
// console.log(user)
// // method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`)
// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }
// console.log(currentOS)

const http = require('http')
const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    // res.write('Welcome to our home page')
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(5001)