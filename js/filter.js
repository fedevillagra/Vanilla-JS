const filtros = ['NUEVO','Narguiles','Mangueras','Boquillas','Cabezas','Tabaco','Carbón','Bases','Equipo'];
const filtrarProductos = (productos) => {
    // el primer for es para las categorias
    for (const filtro of categorias){
        const addButton = document.getElementById(`${filtro.nombre}`);
        addButton.addEventListener("click",()=>{
            const filtrado = productos.filter((element) => element.tipo.includes(filtro.nombre));
            mostrarProductos(filtrado); //carousel.js
        });
    }
    // el segundo for es para los botones de la navbar
    for (const filtro of filtros){
        const addButton = document.getElementById(`${filtro}-nav`);
        addButton.addEventListener("click",()=>{
            const filtrado = productos.filter((element) => element.tipo.includes(filtro));
            mostrarProductos(filtrado); //carousel.js
        });
    }
};