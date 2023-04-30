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

/* const listaBandas = [{nombre:"queen", comienzo:"1970", pais:"inglaterra", genero:"Rock", hit:"Bohemian Rhapsody", precio:1200, imagen:"./img/queen.png", codigo:1},
{nombre:"led zeppelin", comienzo:"1968", pais:"inglaterra", genero:"Rock", hit:"Stairway to Heaven", precio:1200, imagen:"./img/led.png", codigo:2},
{nombre:"the beatles", comienzo:"1960", pais:"inglaterra", genero:"Rock", hit:"Love me do", precio:1200, imagen:"./img/the-beatles.png", codigo:3},
{nombre:"the rolling stones", comienzo:"1962", pais:"inglaterra", genero:"Rock", hit:"(I Can't Get No) Satisfaction", precio:1200, imagen:"./img/the-rolling.png", codigo:4},
{nombre:"ac/dc", comienzo:"1973", pais:"Australia", genero:"Rock", hit:"Back in Black", precio:1200, imagen:"./img/acdc.png", codigo:5},
{nombre:"metallica", comienzo:"1981", pais:"estados unidos", genero:"Rock", hit:"Nothing Else Matters", precio:1200, imagen:"./img/metallica.png", codigo:6},
{nombre:"guns n' roses", comienzo:"1985", pais:"Estados Unidos", genero:"Rock", hit:"Sweet Child O' Mine", precio:1200, imagen:"./img/guns.png", codigo:7},
{nombre:"pink floyd", comienzo:"1965", pais:"inglaterra", genero:"Rock", hit:"Another Brick in the Wall", precio:1200, imagen:"./img/pink.png", codigo:8},
{nombre:"kiss", comienzo:"1973", pais:"estados unidos", genero:"Rock", hit:"I Was Made for Lovin’ You", precio:1200, imagen:"./img/kiss.png", codigo:9},
{nombre:"nirvana", comienzo:"1987", pais:"estados unidos", genero:"Rock", hit:"Smells Like Teen Spirit", precio:1200, imagen:"./img/nirvana.png", codigo:10},
{nombre:"aerosmith", comienzo:"1970", pais:"estados unidos", genero:"Rock", hit:"Love in an Elevator (Cryin')", precio:1200, imagen:"./img/aerosmith.png", codigo:11},
{nombre:"iron maiden", comienzo:"1975", pais:"inglaterra", genero:"Rock", hit:"The Trooper", precio:1200, imagen:"./img/iron.png", codigo:12},
{nombre:"soda stereo", comienzo:"1982", pais:"argentina", genero:"Rock", hit:"De música ligera", precio:1200, imagen:"./img/soda.jpg", codigo:13},
{nombre:"patricio rey y sus redonditos de ricota", comienzo:"1976", pais:"argentina", genero:"Rock", hit:"Jijiji", precio:1200, imagen:"./img/patricio.png", codigo:14},
{nombre:"la renga", comienzo:"1988", pais:"argentina", genero:"Rock", hit:"Balada del diablo y la muerte", precio:1200, imagen:"./img/la-renga.png", codigo:15},
{nombre:"callejeros", comienzo:"1995", pais:"argentina", genero:"Rock", hit:"Una nueva noche fría", precio:1200, imagen:"./img/callejeros.png", codigo:16},
{nombre:"viejas locas", comienzo:"1990", pais:"argentina", genero:"Rock", hit:"Me gustas mucho", precio:1200, imagen:"./img/viejas.png", codigo:17},
{nombre:"sui generis", comienzo:"1968", pais:"argentina", genero:"Rock", hit:"Canción para mi muerte", precio:1200, imagen:"./img/sui.png", codigo:18},
{nombre:"seru giran", comienzo:"1978", pais:"argentina", genero:"Rock", hit:"Seminare", precio:1200, imagen:"./img/seru.png", codigo:19},
{nombre:"almendra", comienzo:"1967", pais:"argentina", genero:"Rock", hit:"Muchacha (Ojos de papel)", precio:1200, imagen:"./img/almendra.png", codigo:20},
{nombre:"los piojos", comienzo:"1988", pais:"argentina", genero:"Rock", hit:"Tan solo", precio:1200, imagen:"./img/los-piojos.png", codigo:21},
{nombre:"las pastillas del abuelo", comienzo:"2002", pais:"argentina", genero:"Rock", hit:"Que es dios?", precio:1200, imagen:"./img/las-pastillas.png", codigo:22},
{nombre:"la vela puerca", comienzo:"1995", pais:"uruguay", genero:"Rock", hit:"Zafar", precio:1200, imagen:"./img/la-vela.png", codigo:23},
{nombre:"rata blanca", comienzo:"1985", pais:"argentina", genero:"Rock", hit:"La leyenda del hada y el mago", precio:1200, imagen:"./img/rata.png", codigo:24},
{nombre:"divididos", comienzo:"1988", pais:"argentina", genero:"Rock", hit:"Que Ves?", precio:1200, imagen:"./img/divididos.png", codigo:25},
{nombre:"sumo", comienzo:"1981", pais:"argentina", genero:"Rock", hit:"La rubia tarada", precio:1200, imagen:"./img/sumo.png", codigo:26},
{nombre:"los abuelos de la nada", comienzo:"1967", pais:"argentina", genero:"Rock", hit:"Lunes por la madrugada", precio:1200, imagen:"./img/los-abuelo.png", codigo:27},
{nombre:"virus", comienzo:"1980", pais:"argentina", genero:"Rock", hit:"Pronta entrega", precio:1200, imagen:"./img/virus.png", codigo:28},
{nombre:"riff", comienzo:"1980", pais:"argentina", genero:"Rock", hit:"Que sea rock", precio:1200, imagen:"./img/riff.png", codigo:29},
{nombre:"v8", comienzo:"1980", pais:"argentina", genero:"Rock", hit:"Destrucción", precio:1200, imagen:"./img/v8.png", codigo:30}
] */

/* bandas o caciones en productos.json con comillas que fueron modificadas para q no rompan el codigo: i cannnnnt get not s..., guns nnnnnn roses, sweeet chil o, (cryin),  */

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
/* mostrarTodosLosProductos(listaBandas) */

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

/* function agregarAlCarrito(banda) {
  carritoRemeras.push(banda);
  localStorage.setItem("carritoDeRemeras", JSON.stringify(carritoRemeras));
} */

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