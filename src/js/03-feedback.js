// Comprobar si el almacenamiento local es compatible en el navegador
function isLocalStorageSupported() {
    try {
      const key = "__test_key__";
      localStorage.setItem(key, key);
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Función para guardar el estado del formulario en el almacenamiento local
  function saveFormState() {
    const form = document.querySelector(".feedback-form");
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const formData = { email, message };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
  
  // Función para cargar el estado del formulario desde el almacenamiento local
  function loadFormState() {
    const savedFormData = localStorage.getItem("feedback-form-state");
    if (savedFormData) {
      const { email, message } = JSON.parse(savedFormData);
      const form = document.querySelector(".feedback-form");
      form.elements.email.value = email;
      form.elements.message.value = message;
    }
  }
  
  // Función para borrar el estado del formulario del almacenamiento local
  function clearFormState() {
    localStorage.removeItem("feedback-form-state");
  }
  
  // Función para manejar el envío del formulario
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.querySelector(".feedback-form");
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    console.log({ email, message });
    clearFormState();
    form.reset();
  }
  
  // Monitorizar el evento "input" en el formulario utilizando lodash.throttle para limitar la frecuencia
  const form = document.querySelector(".feedback-form");
  form.addEventListener(
    "input",
    _.throttle(saveFormState, 500)
  );
  
  // Cargar el estado del formulario cuando la página se carga
  window.addEventListener("load", loadFormState);
  
  // Manejar el envío del formulario
  form.addEventListener("submit", handleFormSubmit);
  
