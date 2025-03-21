
function solve() {
    let text = document.getElementById('input').value;
    let sentences = text.split('.').filter(x => x !== '');
    let output = document.getElementById('output');
    let result = '';

    for (let i = 0; i < sentences.length; i += 3) {
        result += `<p>${sentences.slice(i, i + 3).join('.')}.</p>`;
    }

    output.innerHTML = result;
}
