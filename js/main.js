const productos = [
    {
        id : 0,
        categoria : "guitarra",
        marca : "fender",
        precio : 2343 
    },
    {
        id : 1,
        categoria : "guitarra",
        marca : "gibson",
        precio : 5841 
    },
    {
        id : 2,
        categoria : "bajo",
        marca : "cort",
        precio : 2234 
    },
    {
        id : 3,
        categoria : "bajo",
        marca : "fender",
        precio : 1256 
    },
    {
        id : 4,
        categoria : "bateria",
        marca : "parquer",
        precio : 582 
    },
    {
        id : 5,
        categoria : "bateria",
        marca : "pearl",
        precio : 897 
    },
    {
        id : 6,
        categoria : "teclado",
        marca : "yamaha",
        precio : 2343 
    },
    {
        id : 7,
        categoria : "teclado",
        marca : "casio",
        precio : 4537 
    }
    
]

const cartProducts = []

let productsContainer = document.getElementById("cards")

function renderProductos(productsArray) {
    productsArray.forEach (producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.marca}</h3>
                          <p>${producto.precio}</p>
                          <button class="productoAgregar" id="${producto.id}"> Agregar </button>`
        productsContainer.appendChild(card)
    })
}

function manejarClick(event) {
    // Capturar el id del botón presionado
    
    const botonId = event.target.id;
    let productosFiltrados = productos.filter(producto => producto.categoria == botonId)
    renderProductos(productosFiltrados)
    console.log(productosFiltrados)
    addToCartButton ()
}


// Seleccionar todos los botones con la clase boton-categoria
const botones = document.querySelectorAll('.boton-categoria')

// Añadir el evento click a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', manejarClick)
})

// console.log(categoriaProductos)
// renderProductos(categoriaProductos)


function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)

            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}








