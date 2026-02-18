const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {

  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

module.exports = router;

