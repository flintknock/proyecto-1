// Supongamos que creamos un carrito de compras dexde la consola,

const carrito = [];

//Añadir un elemento al carrito...

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 500,
};

const producto2 = {
    nombre: "Celular",
    precio: 500,
};
const producto5 = {
    nombre: "iPhone",
    precio: 600,
};
carrito.push(producto); //añadimos llaves a un objeto
carrito.push(producto2);
carrito.push(producto5);
console.log(carrito);


const producto3 = {
    nombre: "Teclado",
    precio: 50,
};
carrito.unshift(producto3); // agraga de primerito

console.log(carrito);




