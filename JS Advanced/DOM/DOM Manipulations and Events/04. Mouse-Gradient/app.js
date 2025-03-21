function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    gradient.addEventListener('mousemove', (e) => {
        result.textContent = `${Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100)}%`;
    });
    gradient.addEventListener('mouseout', () => {
        result.textContent = '';
    });
}