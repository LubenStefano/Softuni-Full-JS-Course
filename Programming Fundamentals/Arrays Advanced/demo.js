//може да добавяме и проверяваме дали дадено число го има в arr с .includes и .indexOf , КАТО  arr.indexOf(num) връща -1 ако не го намери и
//индекса на първото срещане ако го намери, ако не го намери може да го добавим с arr.push(num);
function demo() {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr2 = arr1; // arr2 е равен на arr1 и сега ако променим arr2 промените ще се отразят и в arr1, защото те са едно и също нещо arr2 просто сочи към arr1
  // ако искаме да го копираме трябва да направим arr2 = arr1.slice(0)
  let arr3 = arr1.slice(0); // arr3 е копие на arr1 и сега ако променим arr3 промените няма да се отразят в arr1
  console.log(arr1);
  arr1.pop();
  console.log(arr1); // премахва последния елемент от масива
  console.log(arr2); // промените са се отразили и в arr2
  console.log(arr3); // промените не са се отразили в arr3
  let arr4 = arr1.slice(0, 2); // взима първите 2 елемента от arr1 .slice(кога започва, колко да вземе)
  console.log(arr4);
  //split разделя стринг на масив от стрингове
  let str = "a b c d";
  let arrStr = str.split(" "); // разделя str на масив от стрингове, разделителя е " " (празно място)
  console.log(arrStr); // ["a", "b", "c", "d"]
  
  //splice може да добавя и премахва елементи от масива;
  let abc = ["a", "b", "c"];
  let index = abc.indexOf("c"); // връща индекса на 'c' в abc, ако добавим  +1 ще върне индекса на следващия елемент ['a', 'b', c', 'd']
  // .splice(кога започва, колко да премахне, какво да добави) ако не добавим колко да премахне (0) -> ще премахне всичко след кога започва
  abc.splice(index, 0, "d"); // добавя 'd' на позиция index
  console.log(abc);
  
  //map() връща нов масив с променени елементи
  let arr5 = arr1.map((x) => x * 2); // x => x * 2 е същото като function(x) {return x * 2;}
  console.log(arr5);
  let abcToUpperCase = abc.map((x) => x.toUpperCase()); // променя всички елементи на abc на главни букви x се взима от abc
  console.log(abcToUpperCase);
  let numStr = ["1", "2", "3", "4", "5"];
  let numAsNum = numStr.map( function(x) {return Number(x)}); // променя всички елементи на numStr на числа 
  //function(x) {return Number(x)} е същото като x => Number(x)
  console.log(numAsNum);
  //да изкараме всички четни числа от arr1 (arr1 e [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  
  let even = arr1.filter(n => n % 2 ===0); // връща всички четни числа от arr1 
  //filter връща нов масив с елементи които отговарят на условието (n % 2 ===0)
  console.log(even);
  
  //sort
  let arr6 = [5, 1, 3, 2, 4];
  console.log(arr6);
  let sortedArr6 = arr6.sort((a, b) => a - b); // сортира arr6 във възходящ ред от най-малкото към наи-голямото, a - b е за възходящ ред, b - a е за низходящ ред
  console.log(sortedArr6); 
  let names = ["Pesho", "Goshov", "Stamat"];
  let sortedNames = names.sort((a, b) => a.localeCompare(b)); // сортира names във възходящ ред по азбучен ред
  console.log(sortedNames);
  //по дължина на стрингове
  let sortedNamesByLength = names.sort((a, b) => a.length - b.length); // сортира names във възходящ ред по дължина на стринговете
  console.log(sortedNamesByLength);
  //slice
  let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let slicedArr7 = arr7.slice(0, 5); // взима първите 5 елемента от arr7
  console.log(slicedArr7);
}
demo();
