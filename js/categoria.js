const productos = [
    {
        id : 0,
        categoria : "guitarra",
        marca : "fender",
        precio : 2000,
        img: './../img/guitarra-fender.jpg' 
    },
    {
        id : 1,
        categoria : "guitarra",
        marca : "gibson",
        precio : 2200,
        img: './../img/guitarra-gibson.jpg'  
    },
    {
        id : 2,
        categoria : "bajo",
        marca : "cort",
        precio : 2500,
        img: './../img/bajo-cort.webp'
    },
    {
        id : 3,
        categoria : "bajo",
        marca : "fender",
        precio : 3000,
        img: './../img/bajo-fender.webp' 
    },
    {
        id : 4,
        categoria : "bateria",
        marca : "parquer",
        precio : 5000,
        img: './../img/beteria-parquer.webp' 
    },
    {
        id : 5,
        categoria : "bateria",
        marca : "pearl",
        precio : 8000,
        img: './../img/bateria-pearl.webp' 
    },
    {
        id : 6,
        categoria : "teclado",
        marca : "yamaha",
        precio : 2500,
        img: './../img/teclado-yamaha.webp' 
    },
    {
        id : 7,
        categoria : "teclado",
        marca : "casio",
        precio : 3500,
        img: './../img/teclado-casio.webp' 
    }
    
]

const categoria = JSON.parse(localStorage.getItem('categorias'))

const resultado = document.getElementById('cardsc')

const cartProducts = []

function mostrarCategoria(){
categoria.forEach(producto => {
    const contenedor = document.createElement('div')
    contenedor.className = "cardp"
    contenedor.innerHTML = `<img src="${producto.img}" alt=producto>
                            <h3>${producto.marca}</h3>
                            <p>$${producto.precio}</p>
                            <button class="productoAgregar" id="${producto.id}"> Agregar </button>`
    resultado.appendChild(contenedor)
    
})}

function addToCartButton () {
    const addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            //aca habria que hacer la validacion para el carrito
            cartProducts.push(selectedProduct)

            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}

mostrarCategoria()
addToCartButton()

