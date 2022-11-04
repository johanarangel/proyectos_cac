/* Consumo de API */

const apiURL = "https://api.mercadolibre.com/categories/MLA31045"

async function obtenerNombres() {
   try{
    const response = await fetch(apiURL)
    const data = await response.json()

    document.getElementById("living").innerHTML = data.name
    document.getElementById("living-1").innerHTML = data["path_from_root"][0].name
    document.getElementById("living-2").innerHTML = data["path_from_root"][1].name
    document.getElementById("cant-living").innerHTML = `<b>Cantidad</b> de prod: ` + data["total_items_in_this_category"]
   }
   catch(error) {
    console.log("Ocurrió un error grave", error);
   }
}
obtenerNombres()

/* Fin Consumo API */

/* Animación de la sección Inicio y Vendidos */

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $('.s3').css({
            'background-position-x': - scroll + 'px'
        })
    })
})
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $('.s1').css({
            'background-position-x': - scroll + 'px'
        })
    })
})

/* Fin Animación */

/* Menu desplegable Nav */

function showmenu() {
    document.getElementById("toggle").classList.toggle("show");
  }

/* Fin Menu desplegable */

/* Validación formulario */

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const alertas = document.getElementById("alertas")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warn = ""
    const regexNom = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let submit = true
    alertas.innerHTML = ""
    if (!regex.test(email.value)) {
        warn += `<b>E-Mail</b> ingresado inválido <br>`
        submit = false
    }
    if (!regexNom.test(nombre.value)) {
        warn += `<b> Nombre </b> ingresado inválido <br>`
        submit = false
    }
    if (mensaje.value.length > 500) {
        warn += `El <b>Mensaje</b> ingresado es muy largo <br>`
        submit = false
    }
    if (mensaje.value == "") {
        warn += `Escriba su <b>Mensaje</b> antes de enviar <br>`
        submit = false
    }
    if(!submit){
        alertas.innerHTML = warn
    }
    else{
        alert("Mensaje enviado correctamente: ", true)
        nombre.value = ""
        email.value = ""
        mensaje.value = ""
    }
})

/* Fin validación */

/* Funcion agregar linea */

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

/* Fin Funcion */
