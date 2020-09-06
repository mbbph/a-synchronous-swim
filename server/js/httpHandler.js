const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile= path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {

  if (req.method === "GET" && req.url === '/') {
    res.writeHead(200, headers);
    res.end(messageQueue.dequeue());
    next();
  } else if (req.url === '/missing.jpg') {
    res.writeHead(404, headers);
    res.end();
    next();
  }
    else {
    res.writeHead(200, headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  }
};


//generate a random swim command
module.exports.generateRandom = () => {
  var commands = ['up', 'down', 'left', 'right'];
  var x = Math.floor(Math.random() * 4);
  return commands[x];
};
