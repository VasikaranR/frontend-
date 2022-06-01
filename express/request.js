var cookieParser = require('cookie-parser');
var express = require('express');
var app = express(); 
var PORT = 3000;
  
app.use(cookieParser());
  
app.get('/cookie', function (req, res) {
  req.cookies.title='vasikaran';  
  console.log(req.cookies.title);
  res.send('cookie');
});

var user = express.Router();

// baseURL
user.get('/login', function (req, res) {
console.log(req.baseUrl);
res.end();
})

app.use('/user', user);

//host name
app.get('/hostname', function (req, res) {
    console.log(req.hostname);
    res.send('hostname : '+req.hostname)
});
  
//method name
app.get('/method', function (req, res) {
    console.log(req.method);
    res.send('method name : '+req.method);
  });

// protocol
app.get('/protocol', function (req, res) {
    console.log(req.protocol);
    res.send('protocol name : '+req.protocol);
  });

 //headers
 app.get('/header', (req, res) => {
	console.log(req.headers);
  res.send('headers')
}) 
    
app.listen(PORT, function(err){
	console.log("Server listening on PORT", PORT);
});