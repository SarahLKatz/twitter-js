const express = require('express');
const app = express();
const nunjucks =  require('nunjucks')

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

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  console.log(output);
});
