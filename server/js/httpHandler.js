const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypress = require('./keypressHandler');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile= path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === "GET" && req.url === '/swimrandom') {
    res.writeHead(200, headers);
    res.end(generateRandom());
    next();
  } else {
    res.writeHead(200, headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  }
};


//generate a random swim command
var generateRandom = () => {
  var commands = ['up', 'down', 'left', 'right'];
  var x = Math.floor(Math.random() * 4);
  return commands[x];
};
