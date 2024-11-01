(function () {
    // URL del backend
    const url = "https://nuevobackend.onrender.com/api/tasks";

    // Realizar la llamada GET utilizando fetch
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Guardar la información extraída en la variable 'informacion'
            const informacion = data;
            console.log(informacion); // Puedes usar console.log para ver la información en la consola
        })
        .catch(error => {
            // Mostrar toda la información del error en la consola
            console.error('Error:', error.message);
            console.error('Error Stack:', error.stack);
        });
})();