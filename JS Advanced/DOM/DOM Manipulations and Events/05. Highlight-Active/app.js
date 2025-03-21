function focused() {
    let elements = document.querySelectorAll(`div input[type= "text"]`);
    elements.forEach(element => {
        element.addEventListener("focus", (e) => {
            e.target.parentElement.className = "focused"
            e.target.parentElement.style.backgroundColor = "grey";
        });
        element.addEventListener("blur", (e)=>{
            e.target.parentElement.className = ""
            e.target.parentElement.style.backgroundColor = null
        })
    });
}