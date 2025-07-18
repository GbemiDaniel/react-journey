const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
// const books = getBook(5);

// const author = books.author;
// const title = books.title;
// author;
// title;

// console.log(author + " wrote " + title);

// Object Destructuring

/* const book = getBook(3);
book;

const {
  author,
  title,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
  ...otherObjects
} = book;
author;
title;
console.log(author, title);

//Arrow function to split publication date
const dateSplitArrow = (str) => {
  return str.split("-")[0];
};

//Array Destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // i had to declare or destructure the genrest out of the object
console.log(primaryGenre, secondaryGenre, otherGenres);

// Destructuring in arrays using soread operator
const newGenres = [...genres, "lame", "boring", "silly"];
newGenres;
const newGenres2 = ["sleepy", "hollow", ...genres, "crazy"];
newGenres2;

// Destructuring in objects using spread operator
const updatedBook = {
  ...book,
  //additional property to object
  hasRoleplay: true,
  //update property
  pages: 1200,
};
updatedBook;

//Template Literals
const summary = `${title} is a ${pages} -page long book written by ${author} in ${dateSplitArrow(
  publicationDate
)} the book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//Ternary OPerator
const pagesRange =
  pages > 1000
    ? "pages are more than a thousand"
    : "pages are lesser than a thousand";
pagesRange;

//Arror functions
function dateSplit(str) {
  return str.split("-")[0];
}

// const dateSplitArrow = (str) => {
//   return str.split("-")[0];
// };

//Short Circuiting

console.log("" || "This retruns the first truthy value");
console.log(0 && "This wont display because it returns the first falsy value");

// using short circuiting to check set default value
console.log(book.translations.chinese || "no chinese translation available");

console.log(book.translations.spanish ?? "no espanol available");

//Optional Chaining
// '?' added to avoid error in the code in case the target data isn't available
function getTotalReviewCount(bookName) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount || 0; // short circuiting here to ensure the code runs smoothly
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
*/

//ARRAY METHODS
//Array map method
const books = getBooks();
books;
console.log(books);

const mapTest = [2, 4, 6, 8, 10].map((yun) => yun / 2);
mapTest;

const booksTitle = books.map((book) => book.title);
booksTitle;

const essentialData = books.map((book) => ({
  titles: book.title,
  authors: book.author,
}));
console.log(essentialData[3].titles);

// Array filter Method
// i use the array filter method to sieve out and get what i want from the data
const booksPages = books
  .filter((book) => book.pages > 500)
  .map((book) => book.title);
booksPages;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const sciBooks = books
  .filter((book) => book.genres.includes("fiction" || "science"))
  .map((book) => book.title);
sciBooks;

//Reduce MEthod
// basically this method is the god father of array methods
// i need more practice tho
const sum = books.reduce((accumulator, book) => {
  return accumulator + book.pages;
}, 0);
sum;

// Array Sort Method
const arrTest = [8, 1, 3, 5, 6, 9, 19, 7];
arrTest.sort((a, b) => a - b);
arrTest;

// using slice method because it overrides the defualt nature of the sort method and creates a copy of the original array to work with
const sortBook = books.slice().sort((a, b) => a.pages - b.pages);
sortBook;

// pactice with reduce method
// 2. Count Books with Movie Adaptations
const adaptedBooks = books.reduce((accumulator, book) => {
  return book.hasMovieAdaptation + accumulator;
}, 0);
adaptedBooks;

// 3. Group Books by Genre

// books.reduce((accumulator, book)=>{
//   const newBook = []
// },0)

// Highest Rated Book
// Write reduce method to extarct each rating for each book into the initial count
// update the count(review rating) if new rating is higher than the previous
// Now get the title of this book from its rating.

const ratedBook = books.reduce((accumulator, book) => {
  book.reviews.goodreads.rating > accumulator;

  return book.title;
}, 0);

ratedBook;

// Working with Immutable Object(Objects that shoouldn't be changed. modified or mutated)
//1. Add a new book
const newBook = {
  id: 6,
  title: "Think and grow rich",
  author: "Dr Napoleon Hill",
  pages: 2400,
};
const bookAfterAdd = [...books, newBook];
bookAfterAdd;

//2. Delete book obeject from new array

const bookAfterDelete = bookAfterAdd.filter((book) => book.pages > 100);
//used the filter method to seive out the book by id and other metrics (this is fun)
bookAfterDelete;

//3 Update book from new array
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 3 ? { ...book, pages: 1200 } : book
);
bookAfterUpdate;

//Asynchronous Javascript

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Fetching data...");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}
getTodos();
console.log(getTodos());

console.log("Fetching data...");
