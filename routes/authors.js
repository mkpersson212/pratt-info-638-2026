const express = require('express');
const Author = require('../models/author');
const router = express.Router();

router.get('/', function(req, res, next) {

  const authors = Author.all;
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

router.get('/form', async (req, res, next) => {
  res.render('authors/form', { title: 'BookedIn || Authors' });
});

module.exports = router;