const cardsContainer = document.querySelector("#cards-container");

const CrearNuevoProyecto = (urlDemo, urlImage, urlRepository, projectName) => {
    const card = document.createElement("div");
    card.classList.add('card-container')
    const contenido = 
        `
        <h2 class="project-title"><span class="code">&lt;</span> ${projectName} <span class="code">&#47;&gt;</span></h2>
        <img class="project-image" src="${urlImage}" alt="">
        <div class="btn-container">
            <span class="btn btn-primary"> <a href="${urlDemo}">Demo</a> </span>
            <span class="btn btn-secundary"><a  href="${urlRepository}">Repository</a></span>
        </div>
        `;
    card.innerHTML = contenido;
    return card
}

const infoProjects = {
    "projects": [
        {
            "urlDemo": "https://marcosegm.github.io/AluraGeek/screens/aluraGeek.html",
            "urlImage": "https://live.staticflickr.com/65535/52776165470_e77484fc11_z.jpg",
            "urlRepository": "https://github.com/Marcosegm/AluraGeek",
            "projectName" : "Alura Geek"
        },
        {
            "urlDemo": "https://marcosegm.github.io/Mobile-first/",
            "urlImage": "https://live.staticflickr.com/65535/52775228327_22a7f76f05_w.jpg",
            "urlRepository": "https://github.com/Marcosegm/Mobile-first",
            "projectName" : "Batatabit"
        },
        // {
        //     "urlDemo": "",
        //     "urlImage": "hppt",
        //     "urlRepository": "",
        //     "projectName" : ""
        // },
    ] 
}

const projectsArray = infoProjects.projects;

for (let i = 0; i < projectsArray.length; i++) {
  
  const projectUrlDemo = projectsArray[i].urlDemo;
  const projectUrlImage = projectsArray[i].urlImage;
  const projectUrlRepository = projectsArray[i].urlRepository;
  const projectTitle = projectsArray[i].projectName;
  
  const newProject = CrearNuevoProyecto(projectUrlDemo, projectUrlImage, projectUrlRepository,projectTitle);
  cardsContainer.appendChild(newProject);

}

