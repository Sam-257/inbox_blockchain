// compile code will go here
const path = require('path'); //Would give a cross system compatability
const fs = require('fs');
const solc = require('solc'); //Solidity compiler current version 0.4.17

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8')

module.exports = console.log(solc.compile(source,1).contracts[':Inbox']);
