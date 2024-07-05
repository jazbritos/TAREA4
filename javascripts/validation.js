function emailValidation() {
    const form = document.getElementById('form');
    const emailField = form.email;
    const emailConfirmField = form.email_confirm;
    const alertClass = "alert";
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      checkEmailMatch();
    });
  
    emailConfirmField.addEventListener('input', checkEmailMatch);
  
    function checkEmailMatch() {
      const previousAlert = document.querySelector(`.${alertClass}`);
      if (previousAlert) {
        form.removeChild(previousAlert);
      }
  
      if (emailField.value !== emailConfirmField.value) {
        const element = document.createElement('p');
        const message = document.createTextNode("El correo electrónico no coincide.");
        element.appendChild(message);
        element.classList.add(alertClass);
        form.appendChild(element);
  
        emailConfirmField.style.backgroundColor = '#f8d7da';
      } else {
        emailConfirmField.style.backgroundColor = '';
      }
    }
  }
  
  window.onload = emailValidation;
  