//Agregar los productos al carousel (catalogo)
const carouselHTML=(producto,cual,index)=>{
    if(cual==1){
        return `
        <div class="carousel-item">
            <div class="row form-group">
                <div class="col-md-4 offset-md-2">
                    <h5 class="h-carousel">${producto.nombre.toUpperCase()}</h5>
                    <p class="p-carousel">${producto.descripcion}</p>
                    <a data-swal-toast="#my-template" type="button" class="btn btn-primary" id="agregar-${producto.id}">Date un capricho!</a>
                </div>
                <div class="col-md-4 offset-md-1">
                    <img src="${producto.imagen}" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>
    `;
    }else{
        return `
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" aria-label="Slide ${index+1}"></button>
        `;
    }

};

const addCarousel = (producto,index)=>{
    carousel.innerHTML += carouselHTML(producto,1);
    carouselIndicators.innerHTML += carouselHTML(producto,0,index);
    if(index == 0){
        carousel.children[0].className+=" active";
        carouselIndicators.children[0].className+=" active";
    }
};

const mostrarProductos = (productos) => {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';
    const carouselIndicators = document.getElementById('carouselIndicators');
    carouselIndicators.innerHTML = '';
    for (const producto of productos){
        index=productos.indexOf(producto);
        addCarousel(producto, index);
    }
    carritoProductos(productos); //cart.js 
}