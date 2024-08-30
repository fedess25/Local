const productos = [
    {
        id : 0,
        categoria : "guitarra",
        marca : "fender",
        precio : 2000,
        img: './../img/guitarra-fender.jpg',
        cant: 1 
    },
    {
        id : 1,
        categoria : "guitarra",
        marca : "gibson",
        precio : 2200,
        img: './../img/guitarra-gibson.jpg',
        cant: 1  
    },
    {
        id : 2,
        categoria : "bajo",
        marca : "cort",
        precio : 2500,
        img: './../img/bajo-cort.webp',
        cant: 1
    },
    {
        id : 3,
        categoria : "bajo",
        marca : "fender",
        precio : 3000,
        img: './../img/bajo-fender.webp',
        cant: 1 
    },
    {
        id : 4,
        categoria : "bateria",
        marca : "parquer",
        precio : 5000,
        img: './../img/beteria-parquer.webp',
        cant: 1 
    },
    {
        id : 5,
        categoria : "bateria",
        marca : "pearl",
        precio : 8000,
        img: './../img/bateria-pearl.webp',
        cant: 1 
    },
    {
        id : 6,
        categoria : "teclado",
        marca : "yamaha",
        precio : 2500,
        img: './../img/teclado-yamaha.webp',
        cant: 1 
    },
    {
        id : 7,
        categoria : "teclado",
        marca : "casio",
        precio : 3500,
        img: './../img/teclado-casio.webp',
        cant: 1 
    }
]

let productsContainer = document.getElementById("cards")



fetch("./db/data.json")
.then(response => response.json())
.then(data => {
    data.foreach(producto => {console.log(producto)})    
})



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






