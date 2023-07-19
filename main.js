class Descuento {
  constructor(codigo, porcentaje) {
      this.codigo = codigo;
      this.porcentaje = porcentaje;
  }
}

let cupones = [
  new Descuento("PizzaPiola", 20),
  new Descuento("PizzaDance", 50),
  new Descuento("PizzaVevoz", 15),
];


// info del cliente

class Pago {
constructor(name) {
  this.name = name;
}
}

const pagos = [
new Pago ("Efectivo"),
new Pago ("Transferencia"),
new Pago ("Tarjeta Débito/Crédito"),
];

let pagoList = document.getElementById("pago");

pagos.forEach ((unPago) => {
let item = document.createElement("option");
item.value = unPago.name.toString();
item.innerText = unPago.name;
pagoList.append(item);
});

const formulario = document.getElementById("formulario");

function validarFormulario (data){
console.log("Validando formulario",data);
const hijos = data.children;

const pedido= {};

for (let index = 0; index < 4; index++) {
  const unHijo = hijos[index];
  const valor = unHijo.children[1].value
  console.log("El valor almacenado es" + unHijo.children[0].innerText + "es:",{valor});
}
}

formulario.addEventListener("submit", (event) => {
event.preventDefault();
validarFormulario(event.target);
guardarPedido(event.target);
mostrarPedido(event.target);

});

// Formulario de armado de pizza

class Masa {
constructor(name) {
  this.name = name;
}
}

const masas = [
new Masa ("Masa Madre"),
new Masa ("Masa a la piedra"),
new Masa ("Masa Clásica"),
];

let masaList = document.getElementById("masa");

masas.forEach ((unaMasa) => {
let item = document.createElement("option");
item.value = unaMasa.name.toString();
item.innerText = unaMasa.name;
masaList.append(item);
});

class Salsa {
constructor(name) {
  this.name = name;
}
}

const salsas = [
new Salsa ("Salsa Filetto"),
new Salsa ("Salsa de Tomate"),
new Salsa ("Salsa Agridulce"),
];

let salsaList = document.getElementById("salsa");

salsas.forEach ((unaSalsa) => {
let item = document.createElement("option");
item.value = unaSalsa.name.toString();
item.innerText = unaSalsa.name;
salsaList.append(item);
});

class Queso {
constructor(name) {
  this.name = name;
}
}

const quesos = [
new Queso ("Queso Fresco"),
new Queso ("Queso Rockefort"),
new Queso ("Queso Muzzarella"),
new Queso ("Queso en Hebras"),
];

let quesoList = document.getElementById("queso");

quesos.forEach ((unQueso) => {
let item = document.createElement("option");
item.value = unQueso.name.toString();
item.innerText = unQueso.name;
quesoList.append(item);
});



class Bebida {
constructor(name) {
  this.name = name;
}
}

const bebidas = [
new Bebida("Coca Cola Original"),
new Bebida("Coca Cola Zero"),
new Bebida("Sprite con azucar"),
new Bebida("Sprite Zero"),
];

let bebidaList = document.getElementById("bebida");

bebidas.forEach ((unaBebida) => {
let item = document.createElement("option");
item.value = unaBebida.name.toString();
item.innerText = unaBebida.name;
bebidaList.append(item);
});

const armado = document.getElementById("armado");
function validarArmado (data){
console.log("Validando armado",data);
const hijos = data.children;

for (let index = 0; index < 4; index++) {
  const unHijo = hijos[index];
  const valor = unHijo.children[1].value
  console.log("La pizza contiene" + unHijo.children[0].innerText + "es:",{valor});
}
}


//Uso de Storage
class Usuario {
constructor(nombre, apellido, telefono) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.telefono = telefono;
}
}

class Pedido {
constructor (masa, salsa, verdurasSeleccionadas, queso, bebida, pago, usuario) {
  this.masa = masa;
  this.salsa = salsa;
  this.verdura = verdurasSeleccionadas;
  this.queso = queso;
  this.bebida = bebida;
  this.pago = pago;
  this.usuario = usuario;

}
}

function obtenerVerdurasSeleccionadas(){
  const checkboxes = document.getElementsByName("verdura");
  const verdurasSeleccionadas = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      verdurasSeleccionadas.push(checkbox.value);
    }
  });
  return verdurasSeleccionadas;
}

function guardarPedido () {
const masa = document.getElementById("masa").value;
const salsa = document.getElementById("salsa").value;
const verdurasSeleccionadas = obtenerVerdurasSeleccionadas();
const queso = document.getElementById("queso").value;
const bebida = document.getElementById("bebida").value;
const pago = document.getElementById("pago").value;
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const telefono = document.getElementById("telefono").value;

const usuario = new Usuario (nombre, apellido,telefono);
const pedido = new Pedido (masa, salsa, verdurasSeleccionadas, queso, bebida, pago, usuario);
localStorage.setItem("pedido", JSON.stringify(pedido));

}

armado.addEventListener("submit", (event)=>{
event.preventDefault ();
validarArmado(event.target);
guardarPedido();
});


function mostrarPedido () {
  const pedidoGuardado = localStorage.getItem("pedido");
  const infoPedidoElement = document.getElementById("info-pedido");
  const precioPizzas = 1500;

if (pedidoGuardado) {
  const pedido = JSON.parse (pedidoGuardado);
  const precioFinal = precioPizzas;

  infoPedidoElement.innerHTML =`
  <p>Nombre: ${pedido.usuario.nombre}</p>
  <p>Masa: ${pedido.masa}</p>
  <p>Salsa: ${pedido.salsa}</p>
  <p>Apellido: ${pedido.usuario.apellido}</p>
  <p> Verduras: ${pedido.verdura.join(", ")}</p>
  <p>Bebida: ${pedido.bebida}</p>
  <p>Telefono: ${pedido.usuario.telefono}</p>
  <p>Queso: ${pedido.queso}</p>
  <p>Precio Final: $${precioFinal}</p>
  <p>Pago: ${pedido.pago}</p>
  `;

infoPedidoElement.classList.add("info-pedido");
} else {
infoPedidoElement.innerHTML = "<p> No se encontró ningún pedido. </p>";
infoPedidoElement.classList.remove("info-pedido");
}
}
mostrarPedido();

const armadoFormulario = document.getElementById("armado");
armadoFormulario.addEventListener("submit", (event)=> {
  event.preventDefault();
  mostrarPedido();
});


// Cupon de descuento

function aplicarDescuento() {
  var codigo = document.getElementById("codigo-descuento").value;

  var descuentosGuardados = JSON.parse(localStorage.getItem("descuentos")) || {};

  if (descuentosGuardados.hasOwnProperty(codigo)) {
    var descuentosGuardados = descuentosGuardados[codigo];

    Swal.fire({
      title: "Descuento aplicado",
      text: "¡Descuento aplicado! Tienes un 20% de ahorro! Tu pizza queda en $ 1350.",
      icon: "success",
      confirmButtonText: "Aceptar"
    });
  } else {
    Swal.fire({
      title: "Código de descuento inválido",
      text: "El código de descuento ingresado no es válido. Por favor, intenta nuevamente.",
      icon: "error",
      confirmButtonText: "Aceptar"
    });
  }
}


// Uso de JSON y Fetch

document.addEventListener("DOMContentLoaded", function() {
  const botonMostrarSucursales = document.getElementById("boton-mostrar-sucursales");
  botonMostrarSucursales.addEventListener("click", mostrarSucursales);
});

function mostrarSucursales() {
  const contenedorSucursales = document.getElementById("contenedor-sucursales");

  fetch("json/sucursales.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(sucursal => {
        const divSucursal = document.createElement("div");
        const nombreSucursal = document.createElement("h3");
        const direccionSucursal = document.createElement("p");
        const telefonoSucursal = document.createElement("p");

        nombreSucursal.textContent = sucursal.nombre;
        direccionSucursal.textContent = `Dirección: ${sucursal.direccion}`;
        telefonoSucursal.textContent = `Teléfono: ${sucursal.telefono}`;

        divSucursal.appendChild(nombreSucursal);
        divSucursal.appendChild(direccionSucursal);
        divSucursal.appendChild(telefonoSucursal);
        contenedorSucursales.appendChild(divSucursal);
      });
    })
    .catch(error => {
      console.log("Error al cargar las sucursales:", error);
    });
}