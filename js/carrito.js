let cartStorage = JSON.parse(localStorage.getItem("cartProducts"))

let cartContainer = document.getElementById("cart-section")

function renderCarrito () {
    cartStorage.forEach (producto => {
        const card = document.createElement("div")
        card.className = "carritop"
        card.innerHTML = `<button><img src="./../img/mas.png" alt="agregar producto" class="mas" id="${producto.id}"></button>
                          <div id="contador">${producto.cant}</div>
                          <button><img src="./../img/menos.png" alt="quitar producto" class="menos" id="${producto.id}"></button>
                          <h3>${producto.marca}</h3>
                          <p>$${producto.precio}</p>
                          <img src="${producto.img}" alt="producto-carrito" class="carrito-img">
                          <button class="tachito" id="${producto.id}">Eliminar</button>`
        cartContainer.appendChild(card)
        eliminar()
        aumentar()
        disminuir()
        eliminarCarrito()
    })

}

function eliminar(){
    let elimina= document.querySelectorAll(".tachito")
    elimina.forEach(boton => boton.onclick = (e) =>{
        let eliminaId = e.currentTarget.id
        cartStorage = cartStorage.filter(producto => producto.id != eliminaId);
        console.log(cartStorage)
        cartContainer.innerHTML = ""
        renderCarrito();
    })
}

function aumentar(){
    const mas= document.querySelectorAll(".mas")
    mas.forEach(boton => boton.onclick = (e) =>{
        const masId = e.currentTarget.id
            const selectedProduct = cartStorage.find(producto => producto.id == masId)
            selectedProduct.cant +=1
            cartContainer.innerHTML = ""
            renderCarrito()
    })
}

function disminuir(){
    const menos= document.querySelectorAll(".menos")
    menos.forEach(boton => boton.onclick = (e) =>{
        const menosId = e.currentTarget.id
            const selectedProduct = cartStorage.find(producto => producto.id == menosId)
            selectedProduct.cant -=1
            cartContainer.innerHTML = ""
            renderCarrito()
    })
}

function vaciarCarrito() {
    cartStorage.length = 0;
    console.log(cartStorage)
    cartContainer.innerHTML = ""
    renderCarrito();
}

function eliminarCarrito(){
document.getElementById('limpiar').addEventListener('click', vaciarCarrito);
}

function total (){
    let suma = 0
    cartStorage.forEach(producto => { suma += (producto.cant*producto.precio)})

    cartContainer.innerHTML = ""
    renderCarrito()
}
renderCarrito()










// const eliminar =document.querySelectorAll(".tachito")

// eliminar.addEventListener('click', function() {
//     console.log('¡El botón ha sido presionado!');
// });
//id="${producto.id}
//<button class="tachito" id="${producto.id}">img src="./../img/tacho.png" alt="eliminar producto </button>
//<a class="navbar-brand" href="./index.html"><img src="./img/logo.png" alt="logo de la web"></a>
//<button><img src="./../img/tacho.png" alt="eliminar producto" class="mas" id ="${producto.id} ></button>

