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

const categoria = JSON.parse(localStorage.getItem('categorias'))

const resultado = document.getElementById('cardsc')

const cartProducts = []

function mostrarCategoria(){
categoria.forEach(producto => {
    const contenedor = document.createElement('div')
    contenedor.innerHTML = `<h3>${producto.marca}</h3>
                           <p>${producto.precio}</p>
                           <button class="productoAgregar" id="${producto.id}"> Agregar </button>`
    resultado.appendChild(contenedor)
    
})}

function addToCartButton () {
    const addButton = document.querySelectorAll(".productoAgregar")
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

mostrarCategoria()
addToCartButton()

