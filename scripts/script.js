//en este proceso hacemos que al clickear el menu hamburguesa,se despliegue
const hamburguesa = document.getElementById("menu-hamburguesa");
const hamburguesa_desplegado = document.getElementById("hamburguesa-desplegado");
const close = document.getElementById("close-hamburguesa");
const body = document.getElementById("body");

hamburguesa.addEventListener("click", (event) => {
    event.preventDefault();
    hamburguesa_desplegado.classList.toggle("hamburguesa-desplegado-hidden");
    hamburguesa.classList.toggle("menu-hamburguesa-hidden");
    body.classList.toggle("body");
})

close.addEventListener("click", (event) => {
    event.preventDefault();
    hamburguesa_desplegado.classList.toggle("hamburguesa-desplegado-hidden");
    hamburguesa.classList.toggle("menu-hamburguesa-hidden");
    body.classList.toggle("body");
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

//hacemos lo mismo para la versión de pc 

const features_desktop = document.getElementById("features_desktop");
const menu_features_desktop = document.getElementById("menu_features_desktop");
const flecha_abajo_features_desktop = document.getElementById("flecha_abajo_features_desktop");
const flecha_arriba_features_desktop = document.getElementById("flecha_arriba_features_desktop");

features_desktop.addEventListener("click", (event) => {
    event.preventDefault();
    menu_features_desktop.classList.toggle("menu-features-hidden");
    menu_features_desktop.classList.toggle("features-desplegado");
    flecha_abajo_features_desktop.classList.toggle("flecha-abajo-features-hidden");
    flecha_arriba_features_desktop.classList.toggle("flecha-arriba-features-hidden");
})


const company_desktop = document.getElementById("company_desktop");
const menu_company_desktop = document.getElementById("menu_company_desktop");
const flecha_abajo_company_desktop = document.getElementById("flecha_abajo_company_desktop");
const flecha_arriba_company_desktop = document.getElementById("flecha_arriba_company_desktop");

company_desktop.addEventListener("click", (event) => {
    event.preventDefault();
    menu_company_desktop.classList.toggle("menu-company-hidden");
    menu_company_desktop.classList.toggle("company-desplegado");
    flecha_abajo_company_desktop.classList.toggle("flecha-abajo-company-hidden");
    flecha_arriba_company_desktop.classList.toggle("flecha-arriba-company-hidden");
})
