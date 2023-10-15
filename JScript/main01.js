//Alertas
alert("Hola soy leo ahora que es JavaScript Moderno");
// Variables let const var 
let nombre = "Leonardo Navarro";
nombre = "leonardo navarro"// cambia osea variable
// Si el navegador es viejito
var elchido = "el mejor del pueblo  en aquellos dias";
// Constantes
const altura = 175;
const apellido = "Zepeda";
//altura = 180; // manda error const de constante no puede cambiar
// Mostrar por consola
console.log(nombre);
console.log(altura);
// Concatenacion
let concatenacion = nombre + " " + apellido;
// Selecionar elementos del dom
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h1> Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>;
    <h3>Mido : ${altura} cm </h3>
`
// Condicionales
if (altura >= 185) {
    datos.innerHTML += "<h1> Eres una persona alta </h1>";
} else {
    datos.innerHTML += "<h1> Eres una persona altura promedio</h1>";
}
// bucles
for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<h2> Estamos en el anho: ${year}</h2>`;
}
// Arrays
let nombres = ["Leonardo", "Victor", "Pepe", "Francisco"];
let divNombres = document.querySelector("#nombres");
//divNombres.innerHTML = nombres[2];
divNombres.innerHTML = "<h1> Listado de nombres</h1><ul>";
/*
nombres.forEach(nombre => 
    {
        divNombres.innerHTML += "<li>" + nombre + "</li>"
    });
*/
for (let nombre of nombres) {
    divNombres.innerHTML += "<li>" + nombre + "</li>"
}
divNombres.innerHTML += "</ul>"
// forma moderna de hacer funciones [ arrow segun yo pero bueno ahi esta]
const miInformacion = (nombre, altura) => {
    let misDatos = `
    <hr/>
    <h1> Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>;
    <h3>Mido : ${altura} cm </h3>
`;
    return misDatos;
}
console.log(miInformacion("Leonardo Navarro", 175));
const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("Leonardo Navarro", 175);
}
imprimir();

// https://www.youtube.com/watch?v=4Q_KWjUfPCU