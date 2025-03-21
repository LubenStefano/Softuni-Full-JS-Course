function solve() {
let textAreas = document.getElementsByTagName("textarea")
let [furniture, result] = textAreas
let buttons = document.getElementsByTagName("button")
let [generateBtn, buyBtn] = buttons
let container = document.querySelector(".table tbody")

generateBtn.addEventListener("click", (e)=>{
let items = JSON.parse(furniture.value)

for (let item of items) {
let newItem = document.createElement("tr")

let imageTd = document.createElement("td")
let img = document.createElement("img")
img.src = item.img
imageTd.append(img)
newItem.append(imageTd)

let nameTd= document.createElement("td")
let name = document.createElement("p")
name.textContent = item.name
nameTd.append(name)
newItem.append(nameTd)

let priceTd= document.createElement("td")
let price = document.createElement("p")
price.textContent = item.price
priceTd.append(price)
newItem.append(priceTd)

let decFactorTd= document.createElement("td")
let decFactor = document.createElement("p")
decFactor.textContent = item.decFactor
decFactorTd.append(decFactor)
newItem.append(decFactorTd)

let markTd = document.createElement("td")
let mark = document.createElement("input")
mark.type = "checkbox"
markTd.append(mark)
newItem.append(markTd)  

container.append(newItem)
}
buyBtn.addEventListener("click", (e)=>{
  let itemsName = []
  let totalPrice = 0
  let totalItems = 0
  let totalDecFactor = 0
  let items = document.querySelectorAll(`tbody tr`)
    for (let item of items) {
      if(item.children[4].children[0].checked){
            totalItems++;
            let name = item.children[1].children[0].textContent;
            let price = item.children[2].children[0].textContent;
            let decFactor = item.children[3].children[0].textContent;
            itemsName.push(name);
            totalPrice += Number(price);
            totalDecFactor += Number(decFactor);
      }
    }
    result.value = `Bought furniture: ${itemsName.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecFactor/itemsName.length}`
})
})
}