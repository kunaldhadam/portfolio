document.addEventListener("DOMContentLoaded", ()=>{
    const toggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuLink = document.querySelectorAll("#mobile-menu li");

    toggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden-menu");
    });

    mobileMenuLink.forEach( link =>{
      link.addEventListener("click", () =>{
        mobileMenu.classList.add("hidden-menu");
      })
    })
});