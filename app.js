const express = require('express');
const app = express();

const PORT = 3000;

app.use(function(req,res,next){
  console.log(req.method, req.url);
  next();
});

app.get('/',function(req,res){
  res.send('Hello World!');
});

app.listen(PORT, function(){
  console.log('server listening');
})