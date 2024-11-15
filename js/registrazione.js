document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('registrationError');

    try {
        const response = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, nome, cognome, email, password })
        });

        if (response.ok) {
            alert('Registrazione avvenuta con successo! Effettua il login.');
            window.location.href = 'index.html';
        } else {
            const data = await response.json();
            errorElement.textContent = data.message || 'Errore durante la registrazione';
        }
    } catch (error) {
        console.error('Errore di rete:', error);
        errorElement.textContent = 'Errore di rete. Riprova più tardi.';
    }
});
