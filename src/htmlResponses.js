const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// response obj has all of Node's HTTP Response class's methods and attributes
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // writeHead allows you to write a status code and a JSON obj of headers to send back
  response.write(index);
  response.end(); // response is not sent until you call end; can not call response.write after
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
