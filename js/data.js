fetch('js/data.json')
.then((response) => response.json())
.then((data) => {
   const productosNuevos = data.filter((element) => element.tipo.includes('NUEVO'));
   mostrarProductos(productosNuevos); // carousel.js
   filtrarProductos(data); //filter.js
});

const carrito = [];