document.getElementById('formulario').addEventListener('submit', event => {
    event.preventDefault(); 

    // Obtener todos los inputs dentro del formulario
    const inputs = document.querySelectorAll('#formulario input');
    let allFieldsFilled = true;

    // Verificar cada campo de entrada
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        
        console.log("todo bien")
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Compra finalizada con exito",
                showConfirmButton: false,
                timer: 1500
                })
    }else{
            
        console.log("faltan datos")
    }
});







