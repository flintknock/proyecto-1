const fechaNac = 2006
switch(true){
    case fechaNac>= 1928 && fechaNac <=1945:
        console.log(`Eres generacion Silenciosa y naciste en el año ${fechaNac}`);
        break;
    case fechaNac>= 1946 && fechaNac <=1964:
        console.log(`Eres generacion Baby Boomer y naciste en el año ${fechaNac}`);
        break;
    case fechaNac>= 1965 && fechaNac <=1980:
        console.log(`Eres generacion X y naciste en el año ${fechaNac}`);
        break;
    case fechaNac>= 1981 && fechaNac <=1996:
        console.log(`Eres generacion Milenial y naciste en el año ${fechaNac}`);
        break;
    case fechaNac >= 1997 && fechaNac <= 2012:
        console.log(`Eres generacion Z y naciste en el año ${fechaNac}`);
        break;
    case fechaNac >= 2012 && fechaNac <= 2026:
        console.log(`Eres generacion Alfa y naciste en el año ${fechaNac}`);
        break;
    default:
        console.log(`Lo sentimos naciste en una fecha diferente, no tengo algun registro`);
}

const ciudad = "Maracay"
switch(true){
    case ciudad == "Caracas":
        console.log(`Naciste en ${ciudad} entonces eres caraqueño`);
        break;
    case ciudad == "Maracay":
        console.log(`Naciste en ${ciudad} entonces eres maracayero`);
        break;
    case ciudad == "Valencia":
        console.log(`Naciste en ${ciudad} entonces eres valenciano`);
        break;
    case ciudad == "Barquisimeto":
        console.log(`Naciste en ${ciudad} entonces eres guaro`);
        break;
    case ciudad == "Maracaibo":
        console.log(`Naciste en ${ciudad} entonces eres maracucho`);
        break;
    default:
        console.log(`No tengo registro de la ciudad de donde naciste, desconosco como llamarte`);
        break;
}

const usuario = "marco";
const password = "abc123"
const rol = "admin";
switch(true){
    case usuario==="marco" && password==="abc123" && rol==="admin":
        console.log(`Hola ${usuario} eres ${rol} bienvenido al Sistema Endigital`);
        break;
    case usuario==="marco" && password==="abc123" && rol==="invitado":
        console.log(`Hola ${usuario} eres ${rol} bienvenido al Sistema Endigital`);
        break;
    case usuario==="marco" && password==="abc123" && rol==="escritor":
        console.log(`Hola ${usuario} eres ${rol} bienvenido al Sistema Endigital`);
        break;
    default:
        console.log(`No eres un usuario registrado o alguna de tus credenciales esta incorrecta`);
}