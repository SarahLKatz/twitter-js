const express = require('express');
const app = express();
const nunjucks =  require('nunjucks')
const routes = require('./routes');

const PORT = 3000;

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

app.listen(PORT, function(){
  console.log('server listening');
})

app.use('/', routes);
