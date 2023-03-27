const cardsContainer = document.querySelector("#cards-container");

const CrearNuevoProyecto = (urlRepository, urlImage, projectName) => {
    const card = document.createElement("div");
    const contenido = 
        `
        <a class="card-container" href="${urlRepository}" target="_blank" >
            <img class="project-image" src="${urlImage}" alt="project" />
            <p class="project-title"> <span class="code">&lt;</span>${projectName}<span class="code">&#47;&gt;</span> </p>
        </a>
        `;
    card.innerHTML = contenido;
    return card
}


const proyecto1 = CrearNuevoProyecto(
    "https://github.com/Marcosegm/AluraGeek",
    "https://live.staticflickr.com/65535/52776165470_e77484fc11_z.jpg",
    "Alura Geek");

const proyecto2 = CrearNuevoProyecto(
    "",
    "https://live.staticflickr.com/65535/52775228327_22a7f76f05_w.jpg",
    "Batatabit");



cardsContainer.appendChild(proyecto1);
cardsContainer.appendChild(proyecto2);
