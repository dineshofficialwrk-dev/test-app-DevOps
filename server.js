const http = require('http');

const port = process.env.PORT || 3000;

const renderHtml = (title, content) => `
<!DOCTYPE html>
<html>
<head>
  <title>${title} - Startup</title>
</head>
<body style="background-color: white; text-align: center; font-family: sans-serif; padding-top: 50px;">
  <nav>
    <a href="/">Home</a> | 
    <a href="/about">About</a> | 
    <a href="/contact">Contact</a>
  </nav>
  <hr style="width: 300px; margin: 20px auto;">
  ${content}
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/' || req.url === '/home') {
    res.statusCode = 200;
    res.end(renderHtml('Home', '<h1>Welcome to Our Startup</h1><p>We build a simple tools for the modern world .</p>'));
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end(renderHtml('About Us', '<h1>About Us</h1><p>from zero to master we are not small ,but we are passionate team of developers.</p>'));
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end(renderHtml('Contact', '<h1>Contact Us</h1><p>Reach us at: hello@ourstartup.com</p>'));
  } else {
    res.statusCode = 404;
    res.end(renderHtml('Not Found', '<h1>404</h1><p>Page not found.</p>'));
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// server.js
console.log("Pipeline test success");