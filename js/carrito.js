let cartStorage = JSON.parse(localStorage.getItem("cartProducts"))   //todos los productos

let cartContainer = document.getElementById("cart-section")

function renderCarrito () {
    cartStorage.forEach (producto => {
        const card = document.createElement("div")
        card.className = "carritop"
        card.innerHTML = `<button><img src="./../img/mas.png" alt="agregar producto" class="mas"></button>
                          <div id="contador">${producto.cant}</div>
                          <img src="./../img/menos.png" alt="quitar producto" class="menos">
                          <h3>${producto.marca}</h3>
                          <p>$${producto.precio}</p>
                          <img src="${producto.img}" alt="producto-carrito" class="carrito-img">
                          <button class="tachito" id="${producto.id}">Eliminar</button>`
        cartContainer.appendChild(card)
        eliminar()
})}

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

renderCarrito()


// function disminuir(){
//     const menos= document.querySelectorAll(".tachito")
//     menos.forEach(boton => boton.onclick = (e) =>{
//         const menosId = e.currentTarget.id
//             const selectedProduct = cartStorage.find(producto => producto.id == menosId)
//             selectedProduct.cant -=1
//     })
// }







// const eliminar =document.querySelectorAll(".tachito")

// eliminar.addEventListener('click', function() {
//     console.log('¡El botón ha sido presionado!');
// });
//id="${producto.id}
//<button class="tachito" id="${producto.id}">img src="./../img/tacho.png" alt="eliminar producto </button>
//<a class="navbar-brand" href="./index.html"><img src="./img/logo.png" alt="logo de la web"></a>
//<button><img src="./../img/tacho.png" alt="eliminar producto" class="mas" id ="${producto.id} ></button>

