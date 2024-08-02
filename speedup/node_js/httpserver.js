const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h1>Welcome From  First server</h1>");
    // res.end();

    if (req.url === "/") {
      res.write("<h1>Welcome TO hOME PAGE</h1>");
      res.end();
    } else if (req.url === "/aboutus") {
      res.write("<h1>Welcome TO About PAGE</h1>");
      res.end();
    } 
    else if (req.url === "/contactus") {
      res.write("<h1>Welcome TO Contact  PAGE</h1>");
      res.end();
    }
    else {
      req.statusCode = "404";
      res.write("<h1>page not found");
      res.end();
    }
  })
  .listen(4321);
