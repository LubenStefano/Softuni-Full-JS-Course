function lockedProfile() {
    const main = document.getElementById('main');
    main.addEventListener('click', onClick);
    function onClick(e) {
        console.log(("wtf"));
        if (e.target.tagName === 'BUTTON') {
            const profile = e.target.parentElement;
            const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;

            if (!isLocked) {
                const hiddenFields = profile.querySelector('div');
                const isVisible = hiddenFields.style.display === 'block';

                hiddenFields.style.display = isVisible ? 'none' : 'block';
                e.target.textContent = isVisible ? 'Show more' : 'Hide it';
            }
        }
    }
}