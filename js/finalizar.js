

const boton = document.getElementById('confirmar')

    
function manejarClick(){
        
}
let finalizando = setTimeout (() => {
    if (boton) {
        console.log("compra finalizada")
        boton.onclick = function() {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              })
        }
    }    
},2000)

boton.onclick = function() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      })
}
