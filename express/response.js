var express = require('express');
var app = express();
var PORT = 3000;

app.get('/append', function(req, res){
	res.append('Warning', '201 Warning');
	console.log(res.get('Warning')); // 201 Warning
});

app.get('/cookie', function(req, res){
    // key-value
    res.cookie('name', 'vasikaran');
    res.send("Cookie Set");
});

app.get('/clear', function(req, res){
  
    // Setting cookie (key-value)
    res.cookie('title', 'vasikaran ravichandran');
  
    // Clearing the cookie
    res.clearCookie('title');
  
    console.log("Cookie cleared");
});

app.get('/headerSent', function (req, res) {
  
    // Before res.send() 
    console.log(res.headersSent); 
    res.send('OK');
})

app.get('/end', function(req, res){
    console.log("Response end")
    res.end();
});

app.listen(PORT, function(err){
	console.log("Server listening on PORT", PORT);
});