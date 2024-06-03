document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-btn');
    const overlay = document.createElement('div');
    const popup = document.createElement('div');

    // Set up overlay
    overlay.classList.add('overlay');

    // Set up popup
    popup.classList.add('popup');

    // Popup content
    popup.innerHTML = `
        <h2>Login</h2>
        <form id="login-form">
            <div>
                <label for="vatsim-id">Vatsim ID</label>
                <input type="text" id="vatsim-id" name="vatsim-id" required maxlength="7" placeholder="0000000">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" id="submit-button">Login</button>
        </form>
        <div id="error-message">Account does not exist.</div>
    `;

    document.body.appendChild(overlay);
    overlay.appendChild(popup);

    loginButton.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    const vatsimIdInput = document.getElementById('vatsim-id');
    vatsimIdInput.addEventListener('input', () => {
        vatsimIdInput.value = vatsimIdInput.value.replace(/\D/g, '').slice(0, 7);
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = document.getElementById('submit-button');
        const errorMessage = document.getElementById('error-message');

        errorMessage.style.display = 'none';
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#aaa';

        setTimeout(() => {
            errorMessage.style.display = 'block';
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '#333';
        }, 1200);
    });
});
