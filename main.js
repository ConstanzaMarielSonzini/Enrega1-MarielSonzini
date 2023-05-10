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

masas.forEach ((unQueso) => {
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

  for (let index = 0; index < 3; index++) {
    const unHijo = hijos[index];
    const valor = unHijo.children[1].value
    console.log("La pizza contiene" + unHijo.children[0].innerText + "es:",{valor});
  }
}

armado.addEventListener("submit", (event) => {
  event.preventDefault();
  validarArmado(event.target);

});


//Uso de Storage

class Pedido {
  constructor (masa, salsa, queso, bebida, pago, nombre, apellido, numeroTelefono) {
    this.masa = masa;
    this.salsa = salsa;
    this.queso = queso;
    this.bebida = bebida;
    this.pago = pago;
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroTelefono = numeroTelefono;

  }
}

function guardarPedido () {
  const masa = document.getElementById("masa").value;
  const salsa = document.getElementById("salsa").value;
  const queso = document.getElementById("queso").value;
  const bebida = document.getElementById("bebida").value;
  const pago = document.getElementById("pago").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;

  const pedido = new Pedido (masa, salsa, queso, bebida, pago, nombre, apellido, telefono);
  localStorage.setItem("pedido", JSON.stringify(pedido));
}

armado.addEventListener("submit", (event)=>{
  event.preventDefault ();
  validarArmado(event.target);
  guardarPedido();
});

function mostrarPedido () {
  const pedidoGuardado = localStorage.getItem("pedido");
  if (pedidoGuardado) {
    const pedido = JSON.parse (pedidoGuardado);

    document.getElementById("pedido-masa").innerText = pedido.masa;
    document.getElementById("pedido-salsa").innerText = pedido.salsa;
    document.getElementById("pedido-queso").innerText = pedido.queso;
    document.getElementById("pedido-bebida").innerText = pedido.bebida;
    document.getElementById("pedido-pago").innerText = pedido.pago;
    document.getElementById("pedido-nombre").innerText = pedido.nombre;
    document.getElementById("pedido-apellido").innerText = pedido.apellido;
    document.getElementById("pedido-telefono").innerText = pedido.telefono;

  }
}
