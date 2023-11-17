document.addEventListener("scroll", function() {
    let navBar = document.querySelector(".navBar");
    let sectionUno = document.getElementById("seccionUno");

    // Calcula la posición de sectionUno
    let sectionUnoRect = sectionUno.getBoundingClientRect();

    // Agrega o quita la clase según la posición de scroll
    if (window.scrollY > sectionUnoRect.bottom) {
        navBar.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed");
    }
});