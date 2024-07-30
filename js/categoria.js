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

mostrarCategoria()
addToCartButton()

