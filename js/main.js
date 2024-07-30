const productos = [
    {
        id : 0,
        categoria : "guitarra",
        marca : "fender",
        precio : 2000 
    },
    {
        id : 1,
        categoria : "guitarra",
        marca : "gibson",
        precio : 2200 
    },
    {
        id : 2,
        categoria : "bajo",
        marca : "cort",
        precio : 2500 
    },
    {
        id : 3,
        categoria : "bajo",
        marca : "fender",
        precio : 3000 
    },
    {
        id : 4,
        categoria : "bateria",
        marca : "parquer",
        precio : 5000 
    },
    {
        id : 5,
        categoria : "bateria",
        marca : "pearl",
        precio : 8000 
    },
    {
        id : 6,
        categoria : "teclado",
        marca : "yamaha",
        precio : 2500 
    },
    {
        id : 7,
        categoria : "teclado",
        marca : "casio",
        precio : 3500 
    }
    
]


const cartProducts = []

let productsContainer = document.getElementById("cards")


function manejarClick(event) {
    
    const botonId = event.target.id;
    let productosFiltrados = productos.filter(producto => producto.categoria == botonId)
    
    localStorage.setItem('categorias',JSON.stringify(productosFiltrados))

    window.location.href = 'pages/categoria.html'
    
}

// Selecciono todos los botones
const botones = document.querySelectorAll('.boton-categoria')

// Añado el evento a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', manejarClick)
})






