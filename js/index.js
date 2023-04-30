const divRemera = document.querySelector("div#remera")
const URL = "js/productos.json"
const listaBandas = []

function obtenerRemeras() {
  fetch(URL)
  .then(response => response.json())
  .then(data => listaBandas.push(...data))
  .then(() => mostrarTodosLosProductos(listaBandas))
  .catch(error => console.log(error))
}
obtenerRemeras()

const inputBanda = document.querySelector("#input-banda")
const botonBanda = document.querySelector("#boton-banda")
const carritoRemeras = recuperarCarrito()

function recuperarCarrito() {
  const carritoJSON = localStorage.getItem("carritoDeRemeras");
  if (carritoJSON !== null){
    return JSON.parse(carritoJSON);
  } else {
    return [];
  }
}
 

function mostrarRemera(banda) {
  return `<div class = "productooo">
  <div class = "centradoProducto" >
              <h4>${banda.nombre}</h4>
              <img src="${banda.imagen}" alt="">
              <h4>$ ${banda.precio}</h4>
              <button id="${banda.codigo}">Comprar</button>
          </div></div>`
}

botonBanda.addEventListener("click", function() {
  const valor = inputBanda.value;
  const resultado = verificarBanda(valor)
  mensajeBandaAgregada()
});

function verificarBanda(nombre) {
    nombre = nombre.trim().toLowerCase()

  for (let i = 0; i < listaBandas.length; i++) {
    if (nombre === listaBandas[i].nombre.trim().toLowerCase()) {
      Swal.fire(
        "Ey! que casualidad!",
        "Tenemos una remera de " + listaBandas[i].nombre + " en nuestra tienda, te invitamos a encontrarla🔎"
      )
    }
  }
}

function buscarRemera(codigo) {
    let resultado = listaBandas.find(banda => banda.codigo === parseInt(codigo))
        return resultado 
}

function mostrarTodosLosProductos(array) {
    divRemera.innerHTML = ""
    array.forEach(element => {
        divRemera.innerHTML += mostrarRemera(element)
    })
    habilitarBotones()
}

function habilitarBotones() {
    const buttons = document.querySelectorAll("button")
          for (boton of buttons) {
            boton.addEventListener("click", (e)=> {
                agregarAlCarrito(e.target.id)
            })
          } 
}



function agregarAlCarrito(id) {
    let resultado = listaBandas.find(banda => banda.codigo === parseInt(id))
        if (resultado !== undefined) {
            carritoRemeras.push(resultado)
            console.log("Se agregó la remera de", resultado.nombre, "al carrito.")
            guardarElCarrito(carritoRemeras)
            mensajeAgregadoAlCarrito()
        }
}

function guardarElCarrito(carritoRemeras) {
  localStorage.setItem("carritoDeRemeras", JSON.stringify(carritoRemeras))
}



function terminarCompra() {
    const carritoTemporal = document.querySelector("#carrito-temporal")
    let totalCarrito = carritoRemeras.reduce((acc, banda)=> acc + banda.precio, 0)
    carritoTemporal.innerHTML = "El total segun la cantidad de remeras que esta llevando es de $" + totalCarrito + ". De click en 'pagar' para finalizar la compra"
}
const terminarCompraBtn = document.querySelector("#terminar-compra-btn")
terminarCompraBtn.addEventListener("click", terminarCompra)



function pagarrr(){
    const divPagar = document.querySelector("#div-pagar")
    divPagar.innerHTML = "Su pago ha sido realizado con exito! Gracias por su compra🙋‍♂️"
    localStorage.removeItem("carritoDeRemeras")
    carritoRemeras.length = 0
}
const pagarBoton = document.querySelector("#pagar-boton")
pagarBoton.addEventListener("click", pagarrr)

const inputJuego = document.querySelector("#input-juego")
const botonJuego = document.querySelector("#boton-juego")

botonJuego.addEventListener("click", function() {
  const valorFinal = inputJuego.value;
  const resultadoFinal = verificarBandaFinal(valorFinal)
});

function verificarBandaFinal(nombre) {
    nombre = nombre.trim().toLowerCase()
  for (let i = 0; i < listaBandas.length; i++) {
  nombre === listaBandas[i].nombre.trim().toLowerCase() &&
      Swal.fire(
        "Bienvenido al servicio de informacion",
        "Buena Eleccion. " + listaBandas[i].nombre + " es una banda que se creo en el año " + listaBandas[i].comienzo + ", la cual influenció mucho el movimiento de la música. Provenientes de " + listaBandas[i].pais + ", llevaron su nombre a lo mas alto con su canción '" + listaBandas[i].hit + "', cancion que hasta el dia de hoy sigue presente entre los amantes de la buena música."
      )
  }
}

function mensajeAgregadoAlCarrito() {
  Toastify({
    text: "El producto se ha agregado al carrito!",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} 
  }).showToast();
}

function mensajeBandaAgregada() {
  Toastify({
    text: "Su banda favorita ha sido guardada con exito. En caso de no tenerla la agregaremos a nuestra tienda.",
    duration: 7000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "left", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, blueviolet, blue)",
    },
    onClick: function(){} 
  }).showToast();
}