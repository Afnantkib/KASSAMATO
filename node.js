const http = require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 30;

const server = http.createServer((req, res) => {
    const home=fs.readFileSync('index.html');
    url=req.url;
    // const services=fs.readFileSync('/services.html');
    // const about=fs.readFileSync('index.html');
    // const contact=fs.readFileSync('/contact.html');
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/html');
  if(url=='/')
  {res.end(home);}
//   else if(url=='/about'){
//       res.end(about);
//   }
  else{res.end("<h1>404 not found<h2>")}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});