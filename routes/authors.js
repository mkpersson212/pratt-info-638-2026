const express = require('express');
const Author = require('../models/author');
const router = express.Router();

router.get('/', function(req, res, next) {

  const authors = Author.all;
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

module.exports = router;

