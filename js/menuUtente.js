
import {data} from "./index"

const form = document.getElementById('createClienteForm');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const clientePayload = Object.fromEntries(formData.entries());

            clientePayload.dataUltimoContatto = new Date(clientePayload.dataUltimoContatto).toISOString().split('T')[0];

            clientePayload.sede = []; 

            try {
                const response = await fetch('http://localhost:3001/me/clienti', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization' : 'Baerer {data}'
                    },
                    body: JSON.stringify(clientePayload)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    alert('Errore durante la creazione del cliente: ' + errorData.message);
                } else {
                    const createdCliente = await response.json();
                    alert('Cliente creato con successo: ' + JSON.stringify(createdCliente, null, 2));
                }
            } catch (error) {
                console.error('Errore durante la fetch:', error);
                alert('Si è verificato un errore: ' + error.message);
            }
        });