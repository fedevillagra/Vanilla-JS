const categorias = [
    {
        nombre:"Shishas",
        img:"legendqhnFsg7NZtKtA_1280x1280.png"
    },
    {
        nombre:"Equipo",
        img:"PNG-Bild-7502644615E0-1-min_1280x1280.png"
    },
    {
        nombre:"Tabaco",
        img:"PNG-Bild-5DEE13F24C2F-1-minWdCfjiWfVcAui_1280x1280.png"
    },
    {
        nombre:"Carbón",
        img:"kohle_1280x1280.png"
    },
    {
        nombre:"Bases",
        img:"PNG-Bild-9B4E38A52335-1ijcJK93WjAc4X_1280x1280.png"
    }
];

const categoriasHTML= (categoria,cual) =>{
    if(cual==1){
        return `
        <a href="#carouselExample" class="card h-100 carta" id="${categoria.nombre}">
            <img src="img/${categoria.img}" class="card-img-top img-primera" alt="...">
            <h5 class="card-title carta-titulo">${categoria.nombre}</h5>
        </a>
        `;
    }else{
        return `
        <div class="col">
            <a href="#carouselExample" class="card h-100 carta" id="${categoria.nombre}">
                <img src="img/${categoria.img}" class="card-img-top img-rest-4" alt="...">
                <h5 class="card-title carta-titulo">${categoria.nombre}</h5>
            </a>
        </div>
        `;
    }
};

const addCategory = (categoria) =>{
    if(categoria.nombre=='Shishas'){
        const primeraCategoria = document.getElementById('primera-categoria');
        primeraCategoria.innerHTML += categoriasHTML(categoria,1);
    }else{
        const categorias = document.getElementById('categorias');
        categorias.innerHTML += categoriasHTML(categoria,0);
    }
};


for (const categoria of categorias){
    addCategory(categoria);
}