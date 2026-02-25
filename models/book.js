const books = [
  {title: "Leviathan Wakes", yearPublished: 2011},
  {title: "Caliban's War", yearPublished: 2012},
  {title: "Millenium Dictionary", yearPublished: 2000},
  ]

  exports.add = (book) => {
  books.push(book);
}

  exports.all = books