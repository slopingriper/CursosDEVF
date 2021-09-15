var Nombre = prompt("Como te Llamas.");
var Direccion = prompt("Cual es tu direccion.");
var Telefono = prompt("Cual es tu Telefono.");



alert('Una Pregunta mas..')
var Edad = prompt("Cuantos años tienes?");
var Año = 2021 - Edad ;



function calcula_resta() {
    document.getElementById('lbResultado1').innerHTML = "Hola "+Nombre + " vives en " + Direccion+ " y tu telefono es "+ Telefono ;
    document.getElementById('lbResultado2').innerHTML = "Tienes " + Edad + " Por lo cual naciste en " + Año;
  }