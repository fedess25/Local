document.addEventListener("DOMContentLoaded", () => {
    console.log("se cargo el DOM")
})

function manejarClick() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      })
}

const botonn = document.getElementById("confirmacion")

botonn.addEventListener('click', manejarClick)

Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Compra finalizada",
    showConfirmButton: false,
    timer: 1500
})