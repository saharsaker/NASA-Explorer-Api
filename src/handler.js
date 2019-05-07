const path = require('path');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1> Sorry, there is Error </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlerPublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extenstionTypes = {
    html : 'text/html',
    js : 'application/javascript',
    css : 'text/css',
    ico : 'image/x-icon'
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('<h1> Sorry , I can not find the file </h1>');
    } else {
      response.writeHead(200, {'Content-Type' : extenstionTypes[extension]});
      response.end(file);
    }
  });
};

 const imgApi = (req, res) => {
  const parsedUrl = url.parse(req.url);
  const info = parsedUrl.query;
  const value = querystring.parse(info);
  const myUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env}`;
  request(myUrl, (err, response, body) => {

  if (err) {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('Sorry, there is an error');
  } else {
    const parsedBody = JSON.parse(body);
     let imgUrl = parsedBody.hdurl;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(body);
  }
})
 }

module.exports = {
  handlerHome,
  imgApi,
  handlerPublic

};
