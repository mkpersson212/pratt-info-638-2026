const express = require('express');

const Book = require('../models/book');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('books/index', { title: 'BookedIn || books', books: Book.all});
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books' });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
  res.redirect(303, '/books')
});

router.get('/edit', function(req, res, next) {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', { title: 'BookedIn || Books', book: book, bookIndex: bookIndex});
});

module.exports = router;

