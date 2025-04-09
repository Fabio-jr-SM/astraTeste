// Efeito background cabecalho
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Altere o valor conforme necessário
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
});
// Fim Efeito background cabecalho

