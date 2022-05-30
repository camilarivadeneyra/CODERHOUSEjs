/* DESAFIOentregable */


class Pedido {
  constructor(producto, precio, cantidad){
      this.producto = producto, 
      this.precio = precio,
      this.cantidad = cantidad,
      this.envio = 0,
      this.subTotal = 0,
      this.total = 0
  }
  calcularSubTotal() {
      this.subTotal = this.precio * this.cantidad;
  }
  calcularIva() {
      return this.subTotal * 0.21;
  }
  calcularEnvio() {
      if(this.subTotal >= 3000) {
          this.envio = 0;
      } else {
          this.envio = 600;
      }
  }
  calcularTotal() {
      this.total = this.subTotal + this.envio + this.calcularIva();
  }
}


function pedidoProducto() {
  let producto = 0;
  let cantidadProducto = 0;
  let precio = 0;

  while(!producto || producto == 0 || producto > 4) {
      producto = parseInt(prompt("Bienvenidos a PuertoBlest. Que sabor buscas?:\n 1: COLOMBIA ($1550)\n 2: ETIOPIA ($1800)\n 3: KENIA ($1600)\n 4: NICARAGUA ($1500)"));
  }

  switch(producto){
      case 1:
          producto = "COLOMBIA";
          precio = 1550;
          break;
      case 2:
          producto = "ETIOPIA";
          precio = 1800;
          break;
      case 3:
          producto = "KENIA";
          precio = 1600;
          break;
      case 4:
          producto = "NICARAGUA";
          precio = 1500;
          break;
  }

  while(!cantidadProducto || cantidadProducto == 0){
      cantidadProducto = parseInt(prompt("Cafe elegido: "+ producto + "\n Ingrese la cantidad que desea.(Solamente numeros)"));
  }

  const compra = new Pedido(producto, precio, cantidadProducto);

  return compra;
}

alert("Bienvenido a PuertoBlest. Vivi tu propia experiencia sensorial.");

const pedido = pedidoProducto();

pedido.calcularSubTotal();
pedido.calcularEnvio();
pedido.calcularTotal();


alert("Detalle del pedido:\n\n"+
  "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
  "- IVA 21%: $" + pedido.calcularIva() + "\n" +
  "- Costo de envío: $" + pedido.envio + "\n\n" +
  "Total = $" + pedido.total
);