// Ejemplo de datos de patrones de llaves (en formato JSON)
const patrones = [
    {
        nombre: "Yale Derecha",
        imagen: "yale_derecha.jpg",
        stock: 10
    },
    {
        nombre: "Yale Izquierda",
        imagen: "yale_izquierda.jpg",
        stock: 10
    },
    {
        nombre: "EZC",
        imagen: "ezc.jpg",
        stock: 20
    },
    {
        nombre: "Wipe",
        imagen: "wipe.jpg",
        stock: 20
    },
    {
        nombre: "Virus Derecha",
        imagen: "virus_derecha.jpg",
        stock: 20
    },
    {
        nombre: "Virus Izquierda",
        imagen: "virus_izquierda.jpg",
        stock: 20
    },
    // Agregar más patrones como sea necesario
];

// Función para crear un elemento HTML de un patrón
function crearPatron(patron) {
    const divPatron = document.createElement("div");
    divPatron.classList.add("patron");

    const imagen = document.createElement("img");
    imagen.src = `img/${patron.imagen}`;
    divPatron.appendChild(imagen);

    const nombre = document.createElement("h3");
    nombre.textContent = patron.nombre;
    divPatron.appendChild(nombre);

    if (patron.stock <= 5) {
        divPatron.classList.add("agotado");
    }

    return divPatron;
}

// Cargar patrones en la sección principal
const seccionPatrones = document.querySelector(".patrones");
patrones.forEach(patron => {
    const divPatron = crearPatron(patron);
    seccionPatrones.appendChild(divPatron);
});

const modal = document.getElementById("modal-foto");
const imagenExpandida = document.getElementById("imagen-expandida");

function abrirModal(rutaImagen) {
    imagenExpandida.src = rutaImagen;
    modal.style.display = "block";
    imagenExpandida.classList.add("imagen-ampliada");
}

function cerrarModal() {
    modal.style.display = "none";
    imagenExpandida.src = "";
    imagenExpandida.classList.remove("imagen-ampliada");
}

// Agregar eventos click a los patrones
const patronesElementos = document.querySelectorAll(".patron");
patronesElementos.forEach(patron => {
    patron.addEventListener("click", () => {
        const rutaImagen = patron.querySelector("img").src;
        abrirModal(rutaImagen);
    });
});


// Evento click para cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        cerrarModal();
    }
});

// Implementar funcionalidad de búsqueda (opcional)
const inputBusqueda = document.getElementById("busqueda");
inputBusqueda.addEventListener("keyup", () => {
    const filtro = inputBusqueda.value.toLowerCase();
    const patronesFiltrados = patrones.filter(patron => {
        return patron.nombre.toLowerCase().includes(filtro);
    });

    seccionPatrones.innerHTML = ""; // Limpiar la sección antes de volver a cargar
    patronesFiltrados.forEach(patron => {
        const divPatron = crearPatron(patron);
        seccionPatrones.appendChild(divPatron);
    });
});
