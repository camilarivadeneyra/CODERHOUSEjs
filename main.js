// const usuario = ["Camila", "Andres", "Juan Ignacio", "Sara"];

// let usuarioNuevo = "";

// do {
//     if (usuarioNuevo != "") {
//         alert ("El usuario ingresado ya existe. Por favor ingrese uno nuevo.")
//     }
//     usuarioNuevo = prompt ("Ingrese su nombre de usuario.");
// } while (usuario.indexOf(usuarioNuevo) != -1);

// alert("El usuario"+usuarioNuevo+" fue creado con exito")







class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase ();
        this.precio = parseFloat(precio);
        this.vendido = false;
    } 
    sumaIva () {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

let nombre = prompt("Por favor ingrese el nombre del producto")
let precio = prompt("Ingrese el precio del producto")

productos.push (new Producto (nombre, precio));
productos.push (new Producto (nombre, precio));
productos.push (new Producto (nombre, precio));

console.log (productos)

for  (const producto of productos)
    producto.sumaIva ();


console.log (productos)

