 // 1) Saludo al usuario//
nombre = prompt ("Bienvenidx a Pizza Popular!! ¿Cual es tu nombre?");
alert ("Bienvenidx a Pizza en 321 " + nombre + "!");
console.log("Bienvenidx a Pizza en 321 " + nombre + "!");

// 2) Pregunta cuantas pizzas? //
let cantidadPizzas = parseInt(prompt(nombre + " ¿Cuántas pizzas desea pedir?"));
alert ("Confirmo: Desea pedir " + cantidadPizzas + " pizzas");
console.log ("Desea pedir: " + cantidadPizzas + " pizzas");


for (let pizzas = 0; pizzas <= cantidadPizzas; pizzas++) {
    let pregunta2 = prompt("Pizza " + (pizzas + 1) + ": " + nombre + " ¿Te gustaría que la pizza tenga base de masa madre o masa clásica?");
    console.log ("Tipo de masa: " + pregunta2);
    let pregunta3 = prompt ("Pizza " + (pizzas + 1) + ": " + nombre + " ¿Queres agregarle verdura? Tenemos tomate, lechuga, rúcula, cebolla caramelizada, cebolla clásica, pepino")
    console.log ("Verduras: " + pregunta3);
    let pregunta4 = prompt ("Pizza " + (pizzas + 1 ) + ": " + nombre + " ¿Que salsa te gustaría que lleve la pizza? Tenemos salsa filetto, salsa blanca, salsa barbacoa. (Puedes combinar)")
    console.log ("Tipo de Salsa: " + pregunta4);
    
}

// 3) Quieres agregar alcohol?//
let pregunta6 = prompt(nombre + " ¿Quieres agregar una bebida alcoholica en tu pedido? Tenemos fernet, vodka smirnoff, vodka sky, gin tanqueray sabor uva. (Indicar cual sino ignorar.");
    console.log ("Bebida alcoholica: " + pregunta6);

// 4) Pide edad//
let edad = parseInt (prompt(nombre + " ¿Que edad tienes?"));
if (edad >= 18) {
    // Se ejecuta el codigo solo si la condicion es TRUE
    alert (" Perfecto! Tomamos el pedido. Te esperamos, muchas gracias !");
} else {
    // Se ejecuta el codigo solo si la condicion es FALSE
    alert ("No puedes comprar bebidas alcoholicas ya que eres menor de edad ! Disculpe!");
}

// 5) descuento de pizzas //
function descuentoPizzas (valorPizzas, descuento) {
    let resultado = valorPizzas - descuento;
    return alert ("El valor de la pizza con el descuento te queda en " + resultado);
}

let valorPizzas = 1500;
let descuento = prompt ("El valor de las pizzas es de $ 1.500. Ingrese el valor del descuento si es que tiene!");

let resultado = descuentoPizzas(valorPizzas,descuento);

// 6) Como abonar?//
let pregunta5 = prompt(nombre + " ¿Cómo te gustaría abonar? Efectivo, transferencia o débito.");
    console.log ("Forma de pago: " + pregunta5);


// Forma de envio?//
// let pregunta5 = prompt(nombre + " ¿Cómo te gustaría abonar? Efectivo, transferencia o débito.");
//     alert ("Confirmo: " + pregunta5);
//     console.log ("Tipo de masa: " + pregunta5);

