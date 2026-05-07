// 1 Calculadora básica

let n1 = 10, n2 = 5, op = "+"; 
if(op === "+") console.log(n1 + n2);
else if(op === "-") console.log(n1 - n2);
else if(op === "*") console.log(n1 * n2);
else if(op === "/") console.log(n1 / n2);

// 2 Número par o impar

let num = 7;
console.log(num % 2 === 0 ? "Es par" : "Es impar");


// 3 Mayor de edad

let edad = 20;
console.log(edad >= 18 ? "Puedes ingresar" : "Acceso denegado");



// 4 Calculadora de notas

let nota1 = 3.5, nota2 = 4.0, nota3 = 2.0;
let promedio = (nota1 + nota2 + nota3) / 3;
console.log(promedio >= 3.0 ? "Aprueba" : "Reprueba");



// 5 descuento en tienda

let compra = 120000;
if(compra > 100000) compra *= 0.90; // Aplica el 10%
console.log("Total a pagar: " + compra);



// 6 login básico 

let user = "admin", pass = "1234";
if(user === "admin" && pass === "1234") console.log("Acceso correcto");
else console.log("Credenciales incorrectas");



// 7 tabla de multiplicar

let t = 5;
for(let i=1; i<=10; i++) { 
    console.log(`${t} x ${i} = ${t*i}`);
}



// 8 Suma acumulada

let numeros = [5, 10, 15, 0], suma = 0;
for(let n of numeros) {
    if(n === 0) break;
    suma += n;
}
console.log("Suma total: " + suma);



// 9 números pares

for(let i=1; i<=50; i++) {
    if(i % 2 === 0) console.log(i);
}



// 10 Listado de frutas

let frutas = ["Manzana", "Pera", "Banano", "Uva", "Mango"];
frutas.forEach(f => console.log(f));



// 11 Buscar en inventario

let inventario = ["Manzana", "Pera", "Mango"];
let buscar = "Pera";
console.log(inventario.includes(buscar) ? "Existe" : "No existe");



// 12 Encontrar el mayor

let numerosArr = [10, 45, 2, 89, 30];
console.log("El mayor es: " + Math.max(...numerosArr));



// 13 cajero automático

let saldo = 1000000, retiro = 200000;
if(retiro <= saldo) {
    saldo -= retiro;
    console.log("Retiro exitoso. Saldo actual: " + saldo);
} else {
    console.log("Saldo insuficiente");
}



// 14 adivina el número

let secreto = Math.floor(Math.random() * 10) + 1;
let intento = 5;
if(intento === secreto) console.log("¡Adivinaste!");
else console.log(secreto > intento ? "Es mayor" : "Es menor");



// 15 Total de carrito de compras

let carrito = [{p: "Leche", precio: 3000}, {p: "Pan", precio: 2000}];
let total = carrito.reduce((acc, item) => acc + item.precio, 0);
console.log("Total carrito: " + total);
