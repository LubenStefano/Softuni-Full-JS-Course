function movies(arr) {
  let movies = {};
  for (let line of arr) {
    if (line.includes("addMovie")) {
      let movieName = line.substring(9);
      movies[movieName] = { name: movieName };
    } else if (line.includes("directedBy")) {
      let [movieName, director] = line.split(" directedBy ");
      if (movies[movieName]) {
        movies[movieName].director = director;
      }
    } else if (line.includes("onDate")) {
      let [movieName, date] = line.split(" onDate ");
      if (movies[movieName]) {
        movies[movieName].date = date;
      }
    }
  }
  let keys = Object.keys(movies);
  for (let key of keys) {
    if (movies[key].director && movies[key].date) {
      console.log(JSON.stringify(movies[key]));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford  Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
