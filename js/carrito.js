const cartStorage = JSON.parse(localStorage.getItem("cartProducts"))   //todos los productos

const cartContainer = document.getElementById("cart-section")

// function filtraRepetidos(){
//     let allproducts = []
//     for (let i=0; i < cartStorage.lenght; i++){
        
//         allproducts = cartStorage[0]   

//         const exits = allproducts.some(producto => producto.id === cartStorage[0].id)
        
//         if (exits){
//             cartStorage[0].cant +=1
//         }else{
//             allproducts.push(cartStorage[0])
//         }
//       }return allproducts
// }

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
                          <img src="./../img/tacho.png" alt="eliminar producto" class="tachito">`
        cartContainer.appendChild(card)
})}

renderCarrito()


