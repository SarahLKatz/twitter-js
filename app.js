const express = require('express');
const app = express();
const nunjucks =  require('nunjucks')

const PORT = 3000;
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(function(req,res,next){
  console.log(req.method, req.url);
  next();
});

app.get('/', function(req, res){
  res.render( 'index', {title: 'Hall of Fame', people: people} );
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

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates