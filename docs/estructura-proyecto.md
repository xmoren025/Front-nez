# Estructura del proyecto y mapeo a la UI

A continuación se listan las carpetas y archivos más relevantes y su relación con la interfaz:

- `src/app/` : rutas de la aplicación (páginas). Ejemplos:
  - `auth/` — páginas de autenticación y registro.
  - `dashboard/` — vistas principales para usuarios autenticados.
- `src/components/` : componentes reutilizables de UI.
  - `modals/` — modales usados en múltiples pantallas.
  - `createPuzzleTabsContent/` — rejillas y vistas usadas en el flujo de creación de puzzles.
  - `dragDrop/` — lógica y estilos de arrastrar/soltar.
  - `forms/` — formularios de entrada de datos.

Para mapear una pantalla concreta a archivo, busca la ruta en `src/app/` y luego revisa los componentes usados en `src/components/`.
