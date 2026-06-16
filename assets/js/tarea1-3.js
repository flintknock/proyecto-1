//paredes
let largoPard = parseInt(prompt("Introduzca el largo de la Pared (en Metros)",));
let altoPard = parseInt(prompt("Introduzca el alto de la Pared (en Metros)",));

const areaPard = largoPard*altoPard

let bloques = 12.5;
let sacoCemento = 1;
let arena = 0.03;

const bloquesT = Math.ceil(bloques*areaPard)
var areaPardS = areaPard/3
const sacosT = Math.ceil(sacoCemento*areaPardS)
const arenaT = Math.ceil(arena*areaPard)


console.log(`Segun los datos administrados, se necesitan ${bloquesT} bloques, ${sacosT} sacos de cemento, y ${arenaT} metros cubicos de arena`);







//ceramica
//let largoHab = parseInt(prompt("Introduzca el largo de la habitacion (en Metros)",));
//let anchoHab = parseInt(prompt("Introduzca el ancho de la habitacion (en Metros)",));
//let largoCer = parseInt(prompt("Introduzca el largo de la baldoza de Ceramica (en Centimetros)",));
//let anchoCer = parseInt(prompt("Introduzca el largo de la baldoza de Ceramica (en Centimetros)",));



const areaHab = largoHab*anchoHab
const largoCerM = largoCer/100
const anchoCerM = anchoCer/100

const areaCerInd = largoCerM*anchoCerM
const CantNetBald = areaHab/areaCerInd

var TotalPiezas = Math.ceil(CantNetBald*1.1)

console.log(`La cantidad de piezas de ceramica necesarias para la obra son ${TotalPiezas}`);