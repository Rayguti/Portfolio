var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();  // Evitar el comportamiento por defecto del formulario
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);  // Recoger los datos del formulario
  
      // Enviar los datos a Formspree
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'  // Aceptar respuesta en formato JSON
        }
      })
      .then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();  // Limpiar el formulario
        } else {
          response.json().then(data => {
            if (data.errors) {
              status.innerHTML = data.errors.map(error => error.message).join(", ");
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form";
            }
          })
        }
      })
      .catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
    }
  
    form.addEventListener("submit", handleSubmit);