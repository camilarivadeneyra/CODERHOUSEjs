// const usuario = ["Camila", "Andres", "Juan Ignacio", "Sara"];

// let usuarioNuevo = "";

// do {
//     if (usuarioNuevo != "") {
//         alert ("El usuario ingresado ya existe. Por favor ingrese uno nuevo.")
//     }
//     usuarioNuevo = prompt ("Ingrese su nombre de usuario.");
// } while (usuario.indexOf(usuarioNuevo) != -1);

// alert("El usuario"+usuarioNuevo+" fue creado con exito")







// class Producto {
//     constructor (nombre, precio) {
//         this.nombre = nombre.toUpperCase ();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     } 
//     sumaIva () {
//         this.precio = this.precio * 1.21;
//     }
// }

// const productos = [];

// let nombre = prompt("Por favor ingrese el nombre del producto")
// let precio = prompt("Ingrese el precio del producto")

// productos.push (new Producto (nombre, precio));
// productos.push (new Producto (nombre, precio));
// productos.push (new Producto (nombre, precio));

// console.log (productos)

// for  (const producto of productos)
//     producto.sumaIva ();


// console.log (productos)



// practicando DOM

let titulo = document.getElementById ("texto1");

console.log (titulo.innerText);

let usuario = prompt ("Bienvenido a Strange Brewing! Ingrese su nombre:", "Su nombre");

titulo.innerText = "Hola" +usuario+ "bienvenido a Strange Brewing";


const productos = [
    { id: 1, nombre: "CAPITAN NELSON - Neipa.", precio: 580 },
    { id: 2, nombre: "CASI MADURO - Sour Ale.", precio: 480 },
    { id: 3, nombre: "DOCTOR ANILLACO - Light Lager.", precio: 410 },
];

for ( const producto of productos ) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="container">
                                <h3> ID: ${producto.id}</h3>
                                <p> Producto: ${producto.nombre}</p>
                                <b> $${producto.precio}</b>
                            </div>`;
    
    document.body.appendChild(contenedor);
}