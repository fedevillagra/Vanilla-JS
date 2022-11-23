//navbar
const navbar = ['NUEVO','Narguiles','Mangueras','Boquillas','Cabezas','Tabaco','Carbón','Bases','Equipo','Hall of Fame','Sale','Revista'];
const navbarHTML= (indiceNombre) =>{
    return `
        <li class="nav-item">
            <a class="nav-link bold ml" href="#carouselExample" id="${indiceNombre}-nav">
                ${indiceNombre}
            </a>
        </li>
    `;
};
const addNavbar = (indiceNombre) =>{
    const navbar = document.getElementById('barra-de-navegacion');
    navbar.innerHTML += navbarHTML(indiceNombre); 
};
for (const indiceNombre of navbar){
    addNavbar(indiceNombre);
}