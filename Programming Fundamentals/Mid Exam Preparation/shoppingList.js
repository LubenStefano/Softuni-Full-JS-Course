function shoppingList(arr) {
    let productList = arr.shift().split("!")
    let command = arr.shift()
    while (command !== "Go Shopping!") {
        let [action, item1, item2] = command.split(" ")
        
        switch(action){
            case "Urgent":
                if (!productList.includes(item1)) {
                    productList.unshift(item1)
                }
                break;
            case "Unnecessary":
                if(productList.includes(item1)){
                    let indx = productList.indexOf(item1)   
                    productList.splice(indx, 1)
                }
                break;
            case "Correct":
                if (productList.includes(item1)){
                    let indx = productList.indexOf(item1)
                    productList.splice(indx, 1, item2)
                }
                break;
            case "Rearrange":
                if (productList.includes(item1)){
                    let indx = productList.indexOf(item1)   
                    productList.splice(indx, 1)
                    productList.push(item1)
                }
            break;
        }
        command = arr.shift()
    }
    console.log(productList.join(", "));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion",

"Rearrange Grapes",

"Correct Tomatoes Potatoes",

"Go Shopping!"])