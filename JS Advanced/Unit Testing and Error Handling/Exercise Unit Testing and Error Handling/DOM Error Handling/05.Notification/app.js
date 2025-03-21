function notify(message) {
// //error handling
// if(typeof message !== "string"){
//   throw new Error("Message is not a string")
// }
// if(message.length === 0){
//   throw new Error("Message has no words")
// }
//the code
let norification = document.getElementById("notification")
norification.textContent = message
norification.style.display = "block"

norification.addEventListener("click", ()=>{
  norification.style.display = "none"
})
}