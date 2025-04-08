
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
}
function handleFormSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    saveUserData();
    displayUserData();
  }
}
formData.addEventListener("submit", handleFormSubmit);


// Password validation example:
//aA1234567
