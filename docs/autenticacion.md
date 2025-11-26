# Autenticación y acceso

Páginas relacionadas con autenticación:

- `src/app/auth/login/page.js` — página de inicio de sesión.
- `src/app/auth/forgot-password/page.js` — solicitar recuperación.
- `src/app/auth/forgot-password/reset-password/page.js` — restablecer contraseña.
- `src/app/auth/register-user/page.js` y `register-organization/page.js` — formularios de registro.

Flujos comunes:

1. Registrar usuario/organización: completa los campos requeridos y confirma por correo (si aplica).
2. Login: introduce email/usuario y contraseña.
3. Recuperar contraseña: solicita enlace de restablecimiento desde la página correspondiente.

Comportamiento esperado:

- Mensajes de error claros al faltar datos.
- Redirección al `Dashboard` al iniciar sesión correctamente.
