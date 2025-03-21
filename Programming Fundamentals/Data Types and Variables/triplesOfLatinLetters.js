function triplesOfLatinLetters(num) {
  for (let a = 0; a < Number(num); a++) {
    let char1 = String.fromCharCode(97 + a);
    for (let b = 0; b < Number(num); b++) {
      let char2 = String.fromCharCode(97 + b);
      for (let c = 0; c < Number(num); c++) {
        let char3 = String.fromCharCode(97 + c);
        console.log(`${char1}${char2}${char3}`);
      }
    }
  }
}
triplesOfLatinLetters("3");
