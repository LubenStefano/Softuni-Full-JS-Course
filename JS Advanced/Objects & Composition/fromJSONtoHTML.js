function fromJSONtoHTMLtable(string) {
  let arr = JSON.parse(string);
  let result = "<table>\n";
  result += "   <tr>\n";
  for (let key of Object.keys(arr[0])) {
    result += `<th>${key}</th>\n`;
  }
  result += "   </tr>\n";
  for (let obj of arr) {
    result += "   <tr>\n";
    for (let value of Object.values(obj)) {
      result += `<td>${value}</td>\n`;
    }
    result += "   </tr>\n";
  }
  result += "</table>";
  console.log(result);
}
fromJSONtoHTMLtable(`[{"Name":"Stamat",

"Score":5.5},{"Name":"Rumen", "Score":6}]`);
