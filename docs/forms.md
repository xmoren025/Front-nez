# Formularios y validaciones

Formularios principales en `src/components/forms/`:

- `loginForm.jsx`
- `registerUserForm.jsx`
- `registerOrgForm.jsx`
- `forgotPasswordForm.jsx`, `resetPasswordForm.jsx`

Comportamiento:

- Los campos obligatorios muestran error si se dejan vacíos.
- Los mensajes de éxito/error se muestran tras enviar y procesar la respuesta del servidor.

Consejos:

- Verifica el formato de email y fuerza contraseñas seguras si la UI lo exige.
