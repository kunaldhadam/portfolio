document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLink = document.querySelectorAll("#mobile-menu li");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden-menu");
  });

  mobileMenuLink.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden-menu");
    })
  })



  const svg_path = "./assets/images/tech_logos/"
  const techstack = {
    "React JS": { "logo": svg_path+"React.svg" },
    "JavaScript": { "logo": svg_path+"Javascript.svg" },
    "Node JS": { "logo": svg_path+"nodejs.svg" },
    "Python": { "logo": svg_path+"Python.svg" },
    "PHP": { "logo": svg_path+"PHP.svg" },
    "Vite": { "logo": svg_path+"Vite.svg" },
    "MySQL": { "logo": svg_path+"MySQL.svg" },
    "MongoDB": { "logo": svg_path+"MongoDB.svg" },
    "Django" : {"logo" : svg_path+"django.svg" },
    "Docker" : {"logo" : svg_path+"docker.svg"},
    "Git" : {"logo" : svg_path+"Git.svg"},
    "Bootstrap" : {"logo" : svg_path+"bootstrap.svg"},
    "Tailwind" : {"logo" : svg_path+"tailwind.svg"}
  }
  function displayProjectTechStack() {
    const project_techstack = [
      ["JavaScript", "React JS", "Vite"],
      ["Python"],
      ["Python"]
    ]
    const projectContainer = document.querySelector(".project-items .container");
    const projects = projectContainer.querySelectorAll(".item-holder");
    projects.forEach((project, index) => {
      // Create the techstack div
      const techstackDiv = document.createElement("div");
      techstackDiv.classList.add("techstack");

      // Create the ul element
      const ul = document.createElement("ul");

      const stack = project_techstack[index] || [];
      stack.forEach((tech) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = techstack[tech]?.logo || "";
        img.alt = tech;
        img.title = tech;

        li.appendChild(img);
        ul.appendChild(li);
      })

      // Append ul to the techstack div
      techstackDiv.appendChild(ul);
      // Append the techstack div to the item-holder
      project.appendChild(techstackDiv);
    })

  }

  function displayTechStack() {
    const frontend = ["React JS","Vite","Tailwind","Bootstrap"];
    const backend = ["Node JS", "Django"];
    const database = ["MySQL", "MongoDB"]
    const programming_languages = ["Python", "JavaScript", "PHP"]
    const tools = ["Docker", "Git"]

    const techGroups = {
      programming_languages,
      frontend,
      backend,
      database,
      tools
    };

    const parentElement = document.querySelector("section.tech");
    const targetElementList = parentElement.querySelectorAll(".tech-section");
    targetElementList.forEach((section) => {
      const stackDiv = section.querySelector(".stack");
      const groupName = section.querySelector("div").classList[0];
      const techList = techGroups[groupName];

      if (!techList || !stackDiv) return;

      techList.forEach(tech => {
        const logo = techstack[tech]?.logo || "./assets/images/tech_logos/default.svg"; // fallback if not found
        const item = document.createElement("div");
        item.className = "tech-item";
        item.innerHTML = `
          <img src="${logo}" alt="${tech} logo" />
          <span>${tech}</span>
        `;
        stackDiv.appendChild(item);
      });
    })
  }

  displayTechStack();
  displayProjectTechStack();



});