function validate() {
let email = document.getElementById("email")
let pattern = /[a-z]+@[a-z]+.[a-s]+/gm

email.addEventListener("change", ()=>{
   if(!pattern.test(email.value)){
    email.classList = "error"
}else{
    email.classList = ""
}
})
}