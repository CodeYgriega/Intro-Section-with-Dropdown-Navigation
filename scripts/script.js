//en este proceso hacemos que al clickear el menu hamburguesa,se despliegue
const hamburguesa = document.getElementById("menu-hamburguesa");
const hamburguesa_desplegado = document.getElementById("hamburguesa-desplegado");
const close = document.getElementById("close-hamburguesa");

hamburguesa.addEventListener("click", (event) => {
    event.preventDefault();
    hamburguesa_desplegado.classList.toggle("hamburguesa-desplegado-hidden");
    hamburguesa.classList.toggle("menu-hamburguesa-hidden");
})

close.addEventListener("click", (event) => {
    event.preventDefault();
    hamburguesa_desplegado.classList.toggle("hamburguesa-desplegado-hidden");
    hamburguesa.classList.toggle("menu-hamburguesa-hidden");
})

//ahora empezamos a hacer lo mismo pero con las secciones de el menu desplegable

const features = document.getElementById("features");
const menu_features = document.getElementById("menu-features");
const flecha_abajo_features = document.getElementById("flecha_abajo_features");
const flecha_arriba_features = document.getElementById("flecha_arriba_features");

features.addEventListener("click", (event) => {
    event.preventDefault();
    menu_features.classList.toggle("menu-features-hidden");
    flecha_abajo_features.classList.toggle("flecha-abajo-features-hidden");
    flecha_arriba_features.classList.toggle("flecha-arriba-features-hidden");
})


const company = document.getElementById("company");
const menu_company = document.getElementById("menu-company");
const flecha_abajo_company = document.getElementById("flecha_abajo_company");
const flecha_arriba_company = document.getElementById("flecha_arriba_company");

company.addEventListener("click", (event) => {
    event.preventDefault();
    menu_company.classList.toggle("menu-company-hidden");
    flecha_abajo_company.classList.toggle("flecha-abajo-company-hidden");
    flecha_arriba_company.classList.toggle("flecha-arriba-company-hidden");
})