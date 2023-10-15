alert("Hola Mundo JS");
let a, b, c;
a = 4;
b = 18;
c = 11;
console.log(c + a);
var nombre = "Leonardo Navarro";
var altura = "175";
/*
var concatenacion = nombre + " " + altura;
document.write(concatenacion);
var datos= document.getElementById("datos");
//datos.innerHTML = concatenacion;
// estas cosas de bajo se llaman backtick (`) se usan para los template literas
datos.innerHTML = `
<h1> Soy la caja de datos</h1>
<h2> Mi nombre es: ${nombre}</h2>
<h3> Mido: ${altura}</h3>
`;
if(altura >= 190){
datos.innerHTML += `<h1> eres una persona alta</h1>`
} else {
datos.innerHTML += `<h1> eres una persona altura promedio</h1>`
}
// le puse i = 2000 para que imprima solo 20 veces
for(var i = 2000 ; i<=2020; i++){
datos.innerHTML += "<h2>Estamos en el anho: "+i;
}
*/
function muestraMinombre(nombre, altura) {
    // estas cosas de bajo se llaman backtick (`) se usan para los template literas
    var misDatos = `
<h1> Soy la caja de datos</h1>
<h2> Mi nombre es: ${nombre}</h2>
<h3> Mido: ${altura}</h3>
`;
    return misDatos;
}
function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMinombre("Leonardo Navarro WD", 175);
}
imprimir();
//muestraMinombre("Leonardo Navarro WD",175);
var nombres = ['Leonardo', 'Victor', 'Antonio', 'Juaquin'];
document.write('<h1>Listado de Nombres</h1>');
/*
for (i = 0; i< nombres.length;i++){
document.write(nombres[i] + '<br/>');
}
*/
// Funcion anonima
/*
nombres.forEach(
function(nombre){
document.write(nombre + '<br/>');
}
);
*/
// funcion flecha
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
}
);

// https://www.youtube.com/watch?v=Q9fwkpxr3Dw