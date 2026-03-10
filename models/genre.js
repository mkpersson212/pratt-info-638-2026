const genres = [
  {storyType: "Fantasy"},
  {storyType: "Science Fiction"},
  {storyType: "Horror"},
  {storyType: "Comedy"},
  {storyType: "Romance"},
  {storyType: "Mystery"},
  {storyType: "Thriller"},
]

//This file has the same functions and references as the author.js, but for genres

exports.all = genres;
exports.upsert = (genre) => {
  if (genre.id) {
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}

exports.add = (genre) => {
  genres.push(genre);
};
exports.update = (genre) => {
  genre.id = parseInt(genre.id);
  genres[genre.id] = genre;
}
exports.get = (index) => {
  return genres[index];
}