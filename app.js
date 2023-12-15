
var datos = {
    nombre: "Ejemplo",
    edad: 25,
    ciudad: "Ejemplópolis"
};

var datosString = JSON.stringify(datos);

localStorage.setItem("datosUsuario", datosString);

var datosRecuperados = localStorage.getItem("datosUsuario");

var datosObjeto = JSON.parse(datosRecuperados);

console.log("Datos recuperados del localStorage:", datosObjeto);