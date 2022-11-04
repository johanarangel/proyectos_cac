const dir = "https://dog.ceo/api/breeds/image/random"
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

function formValidation(event) {
    //event: evento onsubmit del formulario
    //event.target: nodo html del formulario
    
    let form = event.target
    
    //Vamos a admitir que el nombre min. 3 ch
    // form.querySelector('name').value.length <= 3
    
    if (form.querySelector('#name').value.length <= 3){
        event.preventDefault()
        
        form.querySelector('#error-msg').innerText="Introducir un nombre mayor de 3 caracteres"
        
    } else {
        
        form.querySelector('#error-msg').innerText=""
        
    }
}

async function dog() {
    const response = await fetch(dir)
    const data = await response.json()
    console.log(data)
    
    let img = document.createElement("img")
    
    let doggie = data.message
    
    img.setAttribute("src", doggie)
    
    let division = document.getElementById("imgDog")
    
    division.appendChild(img)
    
    function removeBtn() {
        var elem = document.getElementById('boton')
        elem.parentNode.removeChild(elem);
        return false;
    }
    
    removeBtn()
}

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});