const cartStorage = JSON.parse(localStorage.getItem("cartProducts"))

const cartContainer = document.getElementById("cart-section")

function renderCarrito () {
    cartStorage.forEach (producto => {
        const card = document.createElement("div")
        card.className = "carritop"
        card.innerHTML = `<button><img src="./../img/mas.png" alt="agregar producto" class="mas"></button>
                          <div id="contador">0</div>
                          <img src="./../img/menos.png" alt="quitar producto" class="menos">
                          <h3>${producto.marca}</h3>
                          <p>$${producto.precio}</p>
                          <img src="${producto.img}" alt="producto-carrito" class="carrito-img">
                          <img src="./../img/tacho.png" alt="eliminar producto" class="tachito">`
        cartContainer.appendChild(card)
})}

renderCarrito()