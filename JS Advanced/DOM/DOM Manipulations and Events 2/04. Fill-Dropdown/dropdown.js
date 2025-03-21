
function addItem() {
  let menu = document.getElementById("menu");
  let newText = document.getElementById("newItemText");
  let newValue = document.getElementById("newItemValue");
  let item = document.createElement("option");
  item.textContent = newText.value;
  item.value = newValue.value;
  menu.append(item);
  newText.value = "";
  newValue.value = "";
}
