function addItem() {
  let element = document.getElementById("newItemText");
  let ietms = document.getElementById("items");
  let newElem = document.createElement("li");
  newElem.textContent = element.value;
  ietms.append(newElem);
}
