const handlers = require('./handler');

const router = (request, response) => {
  if (request.url === '/') {
    handlers.handlerHome(request, response);
  } else if (request.url.indexOf('/public/') !== -1) {
    handlers.handlerPublic(request, response, request.url);
  } else if (request.url.indexOf('search') !== -1) {
    handlers.handlerConvert(request, response);
  } else if (request.url.indexOf('image') !== -1) {
      handlers.imgApi(req, res);
  }  else {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('<h1> 404 , Page Not Found</h1>');
  }
};


module.exports = router;
