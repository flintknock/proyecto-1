let sumar="";
let restar="";
let multip="";
let division="";



const calculadora ={
    sumar: function(sum1, sum2) {
        console.log(`Sumando ${sum1} mas ${sum2} es igual a ${sum1+sum2}`);
        sumar+=`Sumando ${sum1} mas ${sum2} es igual a ${sum1+sum2}`;
        document.getElementById("sumar").innerHTML=sumar
    },
    restar: function(res1, res2) {
        console.log(`Restando ${res1} menos ${res2} es igual a ${res1-res2}`);
        restar+=`Restando ${res1} menos ${res2} es igual a ${res1-res2}`
        document.getElementById("restar").innerHTML=restar
    },
    multip: function(mult1, mult2) {
        console.log(`Multiplicando ${mult1} por ${mult2} es igual a ${mult1*mult2}`);
        multip+=`Multiplicando ${mult1} por ${mult2} es igual a ${mult1*mult2}`;
        document.getElementById("multip").innerHTML=multip
    },
    division: function(div1, div2) {
        console.log(`Dividiendo ${div1} entre ${div2} es igual a ${div1/div2}`);
        division+=`Dividiendo ${div1} entre ${div2} es igual a ${div1/div2}`;
        document.getElementById("division").innerHTML=division
    },
}

calculadora.sumar(10, 10)
calculadora.restar(30, 40)
calculadora.multip(5, 2)
calculadora.division(20, 2)
