function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }
  console.log(parseFloat(num.toFixed(precision)));
}
rounding(3.141592653589793, 2);
