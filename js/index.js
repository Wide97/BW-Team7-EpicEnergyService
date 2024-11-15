document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            localStorage.setItem('token', data.token);
            // window.location.href = 'dashboard.html';
        } else {
            document.getElementById('message').textContent = 'Email o password non validi!';
        }
    } catch (error) {
        console.error('Errore durante il login:', error);
        document.getElementById('message').textContent = 'Errore di connessione!';
    }
});


document.getElementById('registerButton').addEventListener('click', function () {
    window.location.href = 'registrazione.html';
});
