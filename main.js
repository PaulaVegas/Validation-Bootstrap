// //TODO:
// //**Funcionalidad**:

// //    - Guarda la información recogida de cada uno de los usuarios en `localStorage`.
// //    - Implementa validación que obligue a rellenar todos los campos.
// //    - Implementa una validación para el correo.
// //    - Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
// //    - Implementa una validación de contraseña.
// document.addEventListener('DOMContentLoaded', () => {
// // Guarda la información recogida de cada uno de los usuarios en `localStorage`
// const formData = document.getElementById("formData");
// const userContainer = document.getElementById("userContainer");

// if(formData) {
// const userName = document.getElementById("userName");
// const userEmail = document.getElementById("userEmail");
// const userPassword1 = document.getElementById("userPassword1");
// const userPassword2 = document.getElementById("userPassword2");

// //Función para guardar los datos en localStorage al enviar el formulario
// formData.addEventListener("submit", function onSubmit(event) {
//   event.preventDefault();

//   if (userPassword1.value !== userPassword2.value) {
//     alert("Las contraseñas no coinciden.");
//     return;
//   }

//   localStorage.setItem(
//     "user",
//     JSON.stringify({
//       name: userName.value,
//       email: userEmail.value,
//     })
//   );

//   // Redirigir a user.html
//   // window.location.href = "user.html";
//   const userText = document.createElement("h1");
//   document.body.appendChild(userText);
//   const userInfo= document.createElement("h3");
//   userInfo.textContent = `Nombre: ${userName.value}, Email: ${userEmail.value}`;
//   userList.appendChild(userInfo);
//   carousel.innerHTML = `
//       <h1>Bienvenido</h1>
//       <p><strong>Nombre:</strong> ${userFromStorage.name}</p>
//       <p><strong>Email:</strong> ${userFromStorage.email}</p>
//     `;
// });
// }
// });

const formData = document.getElementById("formData");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword1 = document.getElementById("userPassword1");
const userPassword2 = document.getElementById("userPassword2");


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}
function validateForm() {
  const name = userName.value.trim();
  const email = userEmail.value.trim();
  const password1 = userPassword1.value.trim();
  const password2 = userPassword2.value.trim();
  const carousel = document.getElementById("carousel");

  if (!name || !email || !password1 || !password2) {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return false;
  }


  if (!validatePassword(password1)) {
    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
    return false;
  }

  if (password1 !== password2) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  return true;
}
function saveUserData() {
  const name = userName.value.trim();
  const email = userEmail.value.trim();

  let usersArray = JSON.parse(localStorage.getItem("users")) || [];
  usersArray.push({ name, email });
  // Guardar el array actualizado en localStorage
  localStorage.setItem("users", JSON.stringify(usersArray));
  localStorage.setItem("user", JSON.stringify({ name, email }));
}
function displayUserData() {
  window.location.href = "user.html";
  const carousel = document.getElementById("carousel");
  const userFromStorage = JSON.parse(localStorage.getItem("user"));
  if (userFromStorage) {
    
    carousel.innerHTML = `
      <h1>Bienvenido</h1>
      <p><strong>Nombre:</strong> ${userFromStorage.name}</p>
      <p><strong>Email:</strong> ${userFromStorage.email}</p>
    `;
}
}
function handleFormSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    saveUserData();
    displayUserData();
  }
}
formData.addEventListener("submit", handleFormSubmit);

//aA1234567
