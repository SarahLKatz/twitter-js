const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.use(bodyParser.json())

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log('tweets:', tweets)
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( { name: name } );
  res.render('index', { tweets: list, showForm: true, name: name });
});

router.get('/tweets/:id', function (req, res) {
  var id = +req.params.id;
  var identification = tweetBank.find( { id: id } );
  res.render( 'index', { tweets: identification } );
});


router.post('/tweets', urlencodedParser, function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
