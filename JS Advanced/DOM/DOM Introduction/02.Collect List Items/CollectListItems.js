function extractText() {
    let text = document.getElementById('items')
    let box = document.getElementById('result')
    box.innerHTML = text.textContent
}