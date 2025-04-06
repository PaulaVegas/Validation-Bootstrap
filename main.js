//TODO:
//**Funcionalidad**:

//    - Guarda la información recogida de cada uno de los usuarios en `localStorage`.
//    - Implementa validación que obligue a rellenar todos los campos.
//    - Implementa una validación para el correo.
//    - Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
//    - Implementa una validación de contraseña.
document.addEventListener('DOMContentLoaded', () => {
// Guarda la información recogida de cada uno de los usuarios en `localStorage`
const formData = document.getElementById("formData");
const userContainer = document.getElementById("userContainer");

if(formData) {
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword1 = document.getElementById("userPassword1");
const userPassword2 = document.getElementById("userPassword2");

//Función para guardar los datos en localStorage al enviar el formulario
formData.addEventListener("submit", function onSubmit(event) {
  event.preventDefault();
  if (userPassword1.value !== userPassword2.value) {
    alert("Las contraseñas no coinciden.");
    return;
  }
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: userName.value,
      email: userEmail.value,
    })
  );

  // Redirigir a user.html
  window.location.href = "user.html";
});
}


if (userContainer) {
  const userFromStorage = JSON.parse(localStorage.getItem("user"));

  if (userFromStorage) {
    const userData = document.createElement("div");
    const node= document.createTextNode(`Bienvenido ${userFromStorage.name}`);
    userData.appendChild(node);
  //   userContainer.innerHTML = `
  //     <h1>Bienvenido</h1>
  //     <p><strong>Nombre:</strong> ${userFromStorage.name}</p>
  //     <p><strong>Email:</strong> ${userFromStorage.email}</p>
  //   `;
  // } else {
  //   userContainer.innerHTML = "<p>No hay datos de usuario almacenados.</p>";
  }
}


});