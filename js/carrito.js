const divremeraCarrito = document.querySelector("div#remeraCarrito")
const carritoRemeras = JSON.parse(localStorage.getItem("carritoDeRemeras")) || []




function mostrarCarritoCompleto(banda) {
    return `<div class="remeraEnCarro">
                <img src=".${banda.imagen}" alt="">

            <div class="finalizamo">    
                    <div>
                    <h4>$${banda.precio}</h4>
                    </div> 

                    <div>
                    <button id="${banda.codigo}">Eliminar</button>
                    </div> 

            </div>

            </div>`
}



function llenarCarrito(){
    divremeraCarrito.innerHTML = ""   
    if (carritoRemeras.length > 0){
        carritoRemeras.forEach((banda)=>{
          divremeraCarrito.innerHTML += mostrarCarritoCompleto(banda)
        })
        habilitarBotonesEliminar()
    } else {
        divremeraCarrito.innerHTML = "📫No hay productos en el carrito.📫"
    }
}
llenarCarrito()




function habilitarBotonesEliminar() {
    const btns = document.querySelectorAll("button")
    if (btns !== null){
        for (boton of btns){
            boton.addEventListener("click", (e)=> {
        let indice = carritoRemeras.findIndex(remera => remera.codigo === parseInt(e.target.id))
        carritoRemeras.splice(indice, 1)
        localStorage.setItem("carritoDeRemeras", JSON.stringify(carritoRemeras))
        llenarCarrito()
            })
        }
    }
}


