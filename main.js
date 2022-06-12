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

const productos = [
    {id:1, nombre: "Cafetera Italiana", precio: 11900},
    {id:2, nombre: "Cafetera Prensa Francesa", precio: 16750},
    {id:3, nombre: "Cafetera Espresso", precio: 112900},
    {id:4, nombre: "Cafetera De Filtro", precio: 9999},
    {id:5, nombre: "Cafetera Chemex", precio:15999}
];

for (const producto of productos) {
    let data = document.createElement ("div");

    data.innerHTML = `<div class = "main">
                        <h4> ID: ${producto.id} </h4>
                        <h6> Producto: ${producto.nombre} </h6>
                        <b> $${producto.precio}</b>
                    </div>`;

    
    document.body.appendChild (data);
}