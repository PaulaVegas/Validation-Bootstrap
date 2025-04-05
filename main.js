//TODO:
//**Funcionalidad**:

//    - Guarda la información recogida de cada uno de los usuarios en `localStorage`.
//    - Implementa validación que obligue a rellenar todos los campos.
//    - Implementa una validación para el correo.
//    - Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
//    - Implementa una validación de contraseña.

// Guarda la información recogida de cada uno de los usuarios en `localStorage`
const formData = document.getElementById("formData");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword1 = document.getElementById("userPassword1");
const userPassword2 = document.getElementById("userPassword2");

//Función para guardar los datos en localStorage al enviar el formulario
function saveData(event) {
  event.preventDefault();
  addUser();
  getUser();
}

formData.addEventListener("submit", saveData);

function addUser() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: userName.value,
      email: userEmail.value,
    })
  );
}

function getUser() {
  const userFromStorage = JSON.parse(localStorage.getItem("user"));
  const container = document.getElementById("container");
  document.container.innerHTML = `
    <div>
      <h1>
        <p>
          Name: ${userFromStorage.name}, Email: ${userFromStorage.email}
        </p>
      </h1>
    </div>
  `;
}
