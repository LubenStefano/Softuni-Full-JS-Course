function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const [encodeBtn, decodeBtn] = buttons;
    const [encodeTextArea, decodeTextArea] = textAreas;

    encodeBtn.addEventListener('click', () => {
        let message = encodeTextArea.value
            .split('')
            .map((char) => char.charCodeAt(0) + 1)
            .map((charCode) => String.fromCharCode(charCode))
            .join('');

        decodeTextArea.value = message;
        encodeTextArea.value = '';
    });

    decodeBtn.addEventListener('click', () => {
        let message = decodeTextArea.value
            .split('')
            .map((char) => char.charCodeAt(0) - 1)
            .map((charCode) => String.fromCharCode(charCode))
            .join('');

        decodeTextArea.value = message;
    });
}