const express = require('express');
const router = express.Router();

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require ('../models/genre');

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || books', books: books });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { 
    title: 'BookedIn || Books', 
    authors: Author.all, 
    genres: Genre.all // Pass genres data to the form view
  });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `The book has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books')
});

router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', {
    title: 'BookedIn || Books',
    book: book,
    bookIndex: bookIndex,
    authors: Author.all,
    genres: Genre.all,
  });
});

router.get('/show/:id', async (req, res, next) => {
  var templateVars = {
    title: "BookedIn || show",
    book: Book.get(req.params.id),
    genres: Genre.all // Passes genres data to the book's detailed show view
  };
  if (templateVars.book.authorIds) {
    templateVars.authors = templateVars.book.authorIds.map((authorId) => Author.get(authorId));
  }
  res.render('books/show', templateVars);
});

module.exports = router;
