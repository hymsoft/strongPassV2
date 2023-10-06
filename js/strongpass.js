/**
 * Muestra un mensaje de notificación tipo "toast".
 * @param {string} message - El mensaje que se mostrará en el toast.
 * @param {string} variant - La variante de color del toast (por ejemplo, "success", "warning", "error").
 * @param {number} [duration=2000] - La duración en milisegundos durante la cual se mostrará el toast. Valor predeterminado: 2000 ms.
 * @returns {Object} - La instancia del toast mostrado.
 * @version 1.0.0
 * @author Hugo Segura
 * @company HyM Soft
 * @year 2021
 */// Función para mostrar un toast de Bootstrap
function showToast(message, variant, duration = 2000) {
  var toastContainer = document.querySelector('.toast-container');

  var toastElement = document.createElement('div');
  toastElement.classList.add('toast');
  toastElement.classList.add(`bg-${variant}`);
  toastElement.setAttribute('role', 'alert');
  toastElement.setAttribute('aria-live', 'assertive');
  toastElement.setAttribute('aria-atomic', 'true');

  var toastBodyElement = document.createElement('div');
  toastBodyElement.classList.add('toast-body');
  toastBodyElement.innerText = message;

  toastElement.appendChild(toastBodyElement);
  toastContainer.appendChild(toastElement);

  var toast = new bootstrap.Toast(toastElement);
  toast.show();

  if (duration > 0) {
    // Oculto el toast después de la duración especificada
    setTimeout(function() {
      toast.hide();
    }, duration);
  }

  return toast; // Devuelvo la instancia del toast
}

/**
 * Genera una contraseña aleatoria basada en las opciones seleccionadas.
 * @returns {string} - La contraseña generada.
 * @version 1.3.0
 * @author Hugo Segura
 * @company HyM Soft
 * @year 2021
 */
function generatePassword() {
  var length = parseInt(document.getElementById('length').value);
  var uppercase = document.getElementById('uppercase').checked;
  var lowercase = document.getElementById('lowercase').checked;
  var numbers = document.getElementById('numbers').checked;
  var symbols = document.getElementById('symbols').checked;

  // Verifico que al menos una opción esté seleccionada
  if (!uppercase && !lowercase && !numbers && !symbols) {
    showToast('Debes seleccionar al menos una opción.', 'danger');
    return "";
  }

  var charset = "";
  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    charset += "0123456789";
  }
  if (symbols) {
    charset += "!@#$%^&*()-_=+[]{}|\\;:'\",.<>/?";
  }

  var password = "";
  var previousChar = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    var currentChar = charset.charAt(randomIndex);

    // Verifico caracteres consecutivos
    while (previousChar === currentChar) {
      randomIndex = Math.floor(Math.random() * charset.length);
      currentChar = charset.charAt(randomIndex);
    }

    password += currentChar;
    previousChar = currentChar;
  }

  return password;
}

/**
 * Asigna un evento al botón de generar contraseña para mostrar la contraseña generada en un contenedor.
 */
document.getElementById('generate').addEventListener('click', function() {
  var passwordContainer = document.querySelector('.container');
  var passwordElement = passwordContainer.querySelector('.password-container');

  var password = generatePassword();
  if (password) {
    if (!passwordElement) { // Si el contenedor no existe
      // Genero el contenedor
      passwordElement = document.createElement('div');
      passwordElement.classList.add('password-container');
    }
    passwordElement.innerText = password;
    passwordContainer.appendChild(passwordElement);
  }
});

/**
 * Asigna un evento de clic al documento para copiar la contraseña al portapapeles cuando se hace clic en el elemento de contraseña.
 */
document.addEventListener('click', function(event) {
  var passwordContainer = document.querySelector('.container');
  var passwordElement = passwordContainer.querySelector('.password-container');

  if (event.target === passwordElement) {
    var password = passwordElement.innerText;

    navigator.clipboard.writeText(password).then(function() {
      showToast('Contraseña copiada al portapapeles.', 'success');
    }, function() {
      showToast('No se pudo copiar la contraseña.', 'danger');
    });
  }
});

/**
 * Asigna un evento de entrada al elemento de longitud para actualizar la etiqueta de longitud.
 */
document.getElementById('length').addEventListener('input', function() {
  var lengthLabel = document.getElementById('length-label');
  lengthLabel.textContent = 'Longitud: ' + this.value;
});
