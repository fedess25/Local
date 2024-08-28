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

function addToCartButton (){
    const addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = categoria.find(producto => producto.id == productId)
            
            let esta = cartProducts.some(elemento => elemento.id == selectedProduct.id)

            console.log(esta)

            if (esta){
                const repetido = cartProducts.find(producto => producto.id == selectedProduct.id)
                repetido.cant+=1        
            }
            else{
                cartProducts.push(selectedProduct)
                console.log(cartProducts)
                
            }localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}

mostrarCategoria()
addToCartButton()

