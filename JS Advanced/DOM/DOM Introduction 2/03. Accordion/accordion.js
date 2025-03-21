function toggle() {
let text = document.querySelector("#extra")
if(text.style.display === "none"){
    text.style.display = "block"
    document.getElementsByClassName("button")[0].innerHTML = "Less"
}else{
    text.style.display = "none"
    document.getElementsByClassName("button")[0].innerHTML = "More"
}
}