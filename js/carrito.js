let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach (producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.marca}</h3>
                          <p>${producto.precio}</p>`
        cartContainer.appendChild(card)
    })
}

renderCarrito(cartStorage)