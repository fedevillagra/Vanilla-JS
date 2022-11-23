//Añadir y quitar del carrito
const productoCarritoHTML=(producto)=>{
    const {imagen,nombre,precio,cantidad,id} = producto;
    return `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${imagen}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${precio*cantidad} €</p>
            <p class="card-text">Cantidad: ${cantidad}</p>
            <a type="button" class="btn btn-danger" id="quitar-${id}">Quitar</a>
            </div>
        </div>
        </div>
    </div>
`;
};

const sumar = (...numeros) => {
    return numeros.reduce( (acc,n) => acc+n , 0);
};

const updateCarrito = () =>{
    let productosCarritoHTML='';
    let total=0;
    for(const producto of carrito){
        productosCarritoHTML += productoCarritoHTML(producto);
        total+=sumar(producto.precio*producto.cantidad);
    }
    const carritoDom = document.getElementById('carrito');
    carritoDom.innerHTML = productosCarritoHTML;
    if(carrito.length!=0){
        carritoDom.innerHTML += `   <div class="row">
                                        <div class="col-3">
                                            <h5>Total: </h5>
                                        </div>
                                        <div class="col-3 offset-md-6">
                                            <h5>${total} €</h5>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <a finalizar-compra="#my-template" type="button" class="btn btn-success">Comprar Ahora</a>
                                    </div>
                                `;
    }
};

const addCarrito = () => {
    updateCarrito();
    for (const producto of carrito){
        const quitar = document.getElementById(`quitar-${producto.id}`);
        quitar.addEventListener("click",()=>{
            if(producto.cantidad > 1){
                producto.cantidad--;
                addCarrito(); // actualiza el carrito y setea el boton quitar a cada producto del carrito
            }else{
                carrito.splice(carrito.indexOf(producto),1);
                addCarrito();
            }
        });
    };
}

const agregar = (producto) =>{
    const agregar = document.getElementById(`agregar-${producto.id}`);
    agregar.addEventListener("click",()=>{
        if(carrito.includes(producto)){
            producto.cantidad++;
            addCarrito();
        }else{
            carrito.push(producto);
            producto.cantidad=1;
            addCarrito();
        }
    });
};

const carritoProductos = (productos) => {
    for (const producto of productos){
        agregar(producto);
    }
};