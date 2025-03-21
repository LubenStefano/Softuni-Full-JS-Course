function smallestOfThreeNums(num1, num2, num3) {
  // if (num1 > num2 && num3 > num2) {
  //   console.log(num2);
  // } else if (num1 < num2 && num1 < num3) {
  //   console.log(num1);
  // } else {
  //   console.log(num3);
  // }
  function smallerNum(a, b) {
    if(a > b){
      return b;
    }else{
      return a
    }
  }
  if(smallerNum(num1,num2) < num3){
    console.log(smallerNum(num1,num2));
  }else{
    console.log(num3);
  }
}
smallestOfThreeNums(
  2,

  5,

  3
);
