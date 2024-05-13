document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('participant-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = {
            firstName: document.getElementById('first-name').value,
            middleName: document.getElementById('middle-name').value,
            lastName: document.getElementById('last-name').value,
            university: document.getElementById('univ').value,
            email: document.getElementById('e-mail').value
        };

        // Send the formData as a JSON to the server
        fetch('http://localhost:5000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});