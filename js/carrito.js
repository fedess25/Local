const cartStorage = JSON.parse(localStorage.getItem("cartProducts"))

const cartContainer = document.getElementById("cart-section")

function renderCarrito () {
    cartStorage.forEach (producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.marca}</h3>
                          <p>${producto.precio}</p>`
        cartContainer.appendChild(card)
})}

renderCarrito()