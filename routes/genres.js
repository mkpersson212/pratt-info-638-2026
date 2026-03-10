const express = require('express');
const router = express.Router();

const Genre = require('../models/genre');
const Book = require('../models/book');
const Author = require('../models/author');

router.get('/', function(req, res, next) {
  const genres = Genre.all
  res.render('genres/index', { title: 'BookedIn || Genres', genres: genres });
});

router.get('/form', async (req, res, next) => {
  res.render('genres/form', { title: 'BookedIn || Add Genre', genres: Genre.all });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Genre.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
	type: 'info',
	intro: 'Success!',
	message: `The genre has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/genres')
});

router.get('/edit', async (req, res, next) => {
  let genreIndex = req.query.id;
  let genre = Genre.get(genreIndex);
  res.render('genres/form', {
	title: 'BookedIn || genres',
	genre: genre,
	genreIndex: genreIndex,
	authors: Author.all
  });
});

router.get('/show/:id', async (req, res, next) => {
  var templateVars = {
	title: "BookedIn || show",
	genre: Genre.get(req.params.id)
  }
  if (templateVars.genre.authorIds) {
	templateVars.authors = templateVars.genre.authorIds.map((authorId) => Author.get(authorId));
  }
  res.render('genres/show', templateVars);
});

module.exports = router;
