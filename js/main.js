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
    
    localStorage.setItem('categorias',JSON.stringify(productosFiltrados))

    window.location.href = 'pages/categoria.html'
    // renderProductos(productosFiltrados)
    // console.log(productosFiltrados)
    // addToCartButton ()
}


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


// Seleccionar todos los botones con la clase boton-categoria
const botones = document.querySelectorAll('.boton-categoria')

// Añadir el evento click a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', manejarClick)
})

// console.log(categoriaProductos)
// renderProductos(categoriaProductos)





