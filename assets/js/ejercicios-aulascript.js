//Ejercicios AulaScript Nivel Principiante

//Ejercicio N1 - Has hecho una compra y sabes el precio del producto y su iva. 
//Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Precio 200€
//Iva: 21%
//El total son 242 €.  //200 + 21*200/100

//let precio = 200
//let iva = 21*200/100

//console.log(`El precio total es de ${precio + iva}`);

//Ejercicio N2 - En una variable tienes el lado de un cuadrado, 
//debes escribir un programa que te calcule el área y el perímetro del cuadrado.
//El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.
//Lado 40 - El area es 1600 - El perímetro es 160

//let lado = 40
//let area = 1600
//let perimetro = 160

//console.log(`El area del cuadrado es ${lado*lado}`);
//console.log(`El perimetro del cuadrado es ${lado+lado+lado+lado}`);

//Ejercicio N3 - Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y 
//salude con un "Hola" seguido del nombre del usuario.
//Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

//var usuario = prompt("Escriba su Nombre de Usuario",)

//console.log(`Hola ${usuario}!. Como estas?`);

//let username1 = `Hola ${usuario}! Como estas?`
//document.getElementById("username").innerHTML = username1

//Ejercicio N4 - En este ejercicio vas a pedir al usuario que teclee tres números enteros
//y el script mostrará como resultado el valor medio de los tres.
//Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.


var num1 = parseInt(prompt("Escribe el primer numero:",0))
var num2 = parseInt(prompt("Escribe el Segundo numero:",0))
var num3 = parseInt(prompt("Escribe el tercer numero:",0))

let medianums = (num1+num2+num3)/3


console.log(`La media de los numeros es ${medianums}`);








