var express = require('express');
var app=express()
// app.get('/',function(req,res,next){
//     var err=new Error("something went wrong");
//     next(err);
// });

app.get('/', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
      if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data)
      }
    })
  })
app.use(function(err,req,res,next){
    res.send("Oops, something went wrong");
});

app.listen(8080);
