function validate() {
    let input = document.getElementById("email");
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/
    input.addEventListener("change", () => {
        if (input.value.match(pattern)) {
            input.style.borderColor = "green";
            input.classList.delete()
        } else {
            input.classList.add("error")
            input.style.borderColor = "red";
        }
    });
}