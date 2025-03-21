function addItem() {
  const items = document.getElementById("items");
  const newItem = document.getElementById("newItemText");

  let newElem = document.createElement("li");
  newElem.textContent = newItem.value;

  let deleteButton = document.createElement("a");
  deleteButton.href = "#";
  deleteButton.textContent = "[Delete]";

  deleteButton.addEventListener("click", () => {
    newElem.remove();
  });

  newElem.append(deleteButton);
  items.append(newElem);
}
