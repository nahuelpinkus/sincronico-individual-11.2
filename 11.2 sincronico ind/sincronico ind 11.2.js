document.getElementById("Formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const Nacimiento = document.getElementById("Nacimiento").value; 

    const data = {
        nombre: nombre,
        apellido: apellido,
        Nacimiento: Nacimiento 
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Datos del individuo", data);
        
    })
    .catch(error => {
        console.error("Error al enviar la solicitud:", error);
    });
});
