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

// 1) Saludo al usuario//
nombre = prompt("Bienvenidx a Pizza Popular!! \n¿Cual es tu nombre?");
alert("Bienvenidx a Pizza en 321 " + nombre + "!");
console.log("Bienvenidx a Pizza en 321 " + nombre + "!");

// 2) Pregunta cuantas pizzas? //
let cantidadPizzas = parseInt(prompt(nombre + " ¿Cuántas pizzas desea pedir?"));
alert("Confirmo: Desea pedir " + cantidadPizzas + " pizzas");
console.log("Desea pedir: " + cantidadPizzas + " pizzas");

class Pizza {
    constructor(masa, verdura, salsa) {
        this.masa = masa;
        this.verdura = verdura;
        this.salsa = salsa;
    }
}

let pizzasArray = [
]

for (let pizzas = 0; pizzas < cantidadPizzas; pizzas++) {
    let pregunta2 = prompt("Pizza " + (pizzas + 1) + ": " + nombre + " ¿Te gustaría que la pizza tenga base de masa madre o masa clásica?");
    console.log("Tipo de masa: " + pregunta2);
    let pregunta3 = prompt("Pizza " + (pizzas + 1) + ": " + nombre + " ¿Queres agregarle verdura? \nTenemos tomate, lechuga, rúcula, cebolla caramelizada, cebolla clásica, pepino")
    console.log("Verduras: " + pregunta3);
    let pregunta4 = prompt("Pizza " + (pizzas + 1) + ": " + nombre + " ¿Que salsa te gustaría que lleve la pizza? \nTenemos salsa filetto, salsa blanca, salsa barbacoa. (Puedes combinar)")
    console.log("Tipo de Salsa: " + pregunta4);

    pizzasArray.push(new Pizza(pregunta2,pregunta3,pregunta4))
}

console.log(pizzasArray)

// 3) Quieres agregar alcohol?//
let pregunta6 = prompt(nombre + " ¿Quieres agregar una bebida alcoholica en tu pedido? \nTenemos fernet, vodka smirnoff, vodka sky, gin tanqueray sabor uva. \n(Indicar cual sino ignorar.");
console.log("Bebida alcoholica: " + pregunta6);

// 4) Pide edad//
let edad = parseInt(prompt(nombre + " ¿Que edad tienes?"));
if (edad >= 18) {
    // Se ejecuta el codigo solo si la condicion es TRUE
    alert(" Perfecto! Puede agregar bebidas alcoholicas al pedido!");
} else {
    // Se ejecuta el codigo solo si la condicion es FALSE
    alert("No puedes agregar bebidas alcoholicas ya que eres menor de edad ! Disculpe!");
}

// 5) descuento de pizzas // Uso de arrays
function descuentoPizzas(valorPizzas, descuento) {
    let resultado = valorPizzas - descuento;
    return alert("El valor de la pizza con el descuento te queda en " + resultado);
}

let cuponBuscado = prompt("Inserte cupón de descuento (PizzaPiola, PizzaDance, PizzaVevoz)");
let descuentoBuscado = cupones.find(
    (cupon) => cupon.codigo == cuponBuscado
)
let valorPizzas = 1500;
//let descuento = prompt ("El valor de las pizzas es de $ 1.500. \nIngrese el valor del descuento si es que tiene!");
let resultado = descuentoPizzas(valorPizzas, descuentoBuscado.porcentaje);


// 7) datos de cliente para terminar encargo. Use objeto. //

let uncliente = {
    entrega: "",
    pago: "",
    nombreApellido: "",
    tel: "",
    direccion: "",
};

uncliente.entrega = prompt(nombre + " ¿Cómo quisieras que sea la entrega? ¿Retiro o delivery?");
uncliente.pago = prompt(nombre + " ¿Cómo quisieras abonar? ¿Efectivo, transferencia o débito?");
uncliente.nombreApellido = prompt(nombre + " ¿Cúal es tu nombre y apellido completo?");
uncliente.tel = prompt(nombre + " ¿Cúal es es tu número de teléfono?");
uncliente.direccion = prompt(nombre + " Indica tu dirección");

console.log("Los datos del cliente son ", uncliente);

// 8) Preguntas de mejora al usuario con funcion if, else. y arrays//

let preguntas = (prompt(nombre + " queremos mejorar!!! \n¿Nos ayudarías respondiendo unas preguntas?. Respondé si o no."));
if (preguntas.toLowerCase() == "si") {
    //Se ejecuta el codigo solo si la condicion es TRUE//
    alert("Perfecto aquí vamos !!");
    let verduras = ["lechuga", "tomate", "cebolla", "zanahoria"];
    let nuevasverduras = prompt("AYUDANOS A MEJORAR ! \n¿Que verdura agregarías en las opciones? Hay lechuga, tomate, cebolla y zanahoria. En caso de no agregar aclarar.");
    verduras.push(nuevasverduras);
    console.log("Para", nombre, "el listado de verduras disponibles debe quedar asi ", verduras);

    let masas = ["masa madre", "masa clásica"];
    let nuevasmasas = prompt("AYUDANOS A MEJORAR ! \n¿Que masas agregarías en las opciones? Hay masa madre y masa clásica. En caso de no agregar aclarar.");
    masas.push(nuevasmasas);
    console.log("Para", nombre, "el listado de verduras disponibles debe quedar asi ", masas);

    let salsas = ["salsa filetto", "salsa blanca", "salsa barbacoa"];
    let nuevassalsas = prompt("AYUDANOS A MEJORAR ! \n¿Que salsa agregarías en las opciones? Hay salsa filetto, salsa blanca, salsa barbacoa. En caso de no agregar aclarar.");
    salsas.push(nuevassalsas);
    console.log("La descripción sobre propiedad del cliente es ", salsas);
} else {
    //Se ejecuta el codigo solo si la condicion es FALSE//
    alert("Ningun problema!", nombre, ". Muchas gracias por elegirnos!!")
}
