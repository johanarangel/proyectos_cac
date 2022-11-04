// CODIGO BASE DE VALIDACIÓN DE BOOTSTRAP : https://getbootstrap.com/docs/5.2/forms/validation/
// Deshabilitar el envío de forms si hay campos inválidos
(() => {
    'use strict'
  
    // forms a aplicar la validacion
    const forms = document.querySelectorAll('.needs-validation')
  
    // evita el envío hasta ser valido
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()