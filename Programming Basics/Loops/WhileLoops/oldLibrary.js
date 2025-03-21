function oldLibrary(input) {
  let index = 0;
  let theBook = input[index];
  index++;
  let books = input[index];
  index++;

  let bookCounter = 0;

  while (books !== theBook) {
    bookCounter++;

    books = input[index];
    index++;
    if (books === theBook) {
      console.log(`You checked ${bookCounter} books and found it.`);
    } else if (books === "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${bookCounter} books.`);
    }
  }
}
oldLibrary (["Troy",

"Stronger",

"Life Style",

"Troy"])
