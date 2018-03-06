var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: `Visual Studio Code Can Do That?`,
    subtitle: `All the best things about Visual Studio Code that nobody ever bothered to tell you`,
    url: 'http://vscodecandothat.com/'
  });
});

module.exports = router;
