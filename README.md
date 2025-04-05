# Crear Usuario

## Requisitos

Crea la vista **Crear Usuario** que contenga lo siguiente:

<!-- Done -->

1. **Formulario** con los siguientes campos:

   - Nombre
   - Correo
   - Contraseña
   - Repite Contraseña

<!-- To Do -->

2. **Funcionalidad**:

   - Guarda la información recogida de cada uno de los usuarios en `localStorage`.
   - Implementa validación que obligue a rellenar todos los campos.
   - Implementa una validación para el correo.
   - Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
   - Implementa una validación de contraseña.

<!-- To Do -->

3. **Mensajes de validación**:

   - Por cada validación que no se cumpla, muestra un mensaje durante **3 segundos** y que después desaparezca.
   - Al terminar de rellenar los datos del formulario correctamente, muestra un mensaje durante **3 segundos** que indique:  
     **“Usuario creado correctamente”** y redirige a la vista **Usuarios**.

<!-- To Do -->

4. **Mensajes de alerta**:
   - Muestra los mensajes utilizando los **alerts de Bootstrap**.

---

<!-- To Do -->

## Vista Usuarios

Crea la vista **Usuarios**, la cual debe mostrar en **cards de Bootstrap** los usuarios guardados en `localStorage` con los siguientes campos:

- Nombre
- Correo
