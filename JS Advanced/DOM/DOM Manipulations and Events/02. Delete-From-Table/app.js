function deleteByEmail() {
    let table = document.querySelectorAll("#customers tr");
    let searchedEmail = document.querySelector("input[name='email']").value;
    let result = document.querySelector("#result");

    for (let i = 1; i < table.length; i++) {
        let email = table[i].children[1].textContent;

        if (email === searchedEmail) {
            table[i].remove();
            result.textContent = "Deleted.";
            return;
        }else{
            result.textContent = "Not found.";
        }
    }
}