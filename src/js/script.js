// Seleciona links da nav
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove a classe 'active' de todos os links
        navLinks.forEach(item => item.classList.remove('active'));

        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');
    });
});


// Validação Form Bootstrap
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();


/* Filtros */
document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filter-item");
    const projectItems = document.querySelectorAll(".project-item");

    filterItems.forEach(item => {
        item.addEventListener("click", function () {
            filterItems.forEach(i => i.classList.remove("fw-bold", "text-verde"));
            this.classList.add("fw-bold", "text-verde");

            const filter = this.getAttribute("data-filter");

            projectItems.forEach(project => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});