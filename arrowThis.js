let javascript = {
  name: `javascript`,
  library: [`React`, `Vue`, `Angular`],
  printLibrary: function () {
    this.library.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};

// javascript.printLibrary();

let bookName = {
  name: `Book`,
  bookList: [`Math`, `English`, `ICT`],
  printBook: function () {
    this.bookList.forEach((b) => console.log(`${this.name} loves ${b}`));
  },
};
// bookName.printBook();

let movieName = {
  name: `Movie`,
  movieList: [`Inception`, `Tenet`, `Parasite`],
  printMovie: function () {
    this.movieList.forEach((m) => console.log(`${this.name} Loves ${m}`));
  },
};
// movieName.printMovie();
