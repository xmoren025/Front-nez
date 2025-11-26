# Crear Rompecabezas

Ruta principal: `src/app/dashboard/create-puzzle/page.js`

Descripción del flujo:

1. Seleccionar catálogos y piezas:
   - Usa las pestañas y rejillas (`createPuzzleTabsContent/`) para añadir elementos al carrito.
2. Representación del puzzle:
   - `puzzleRepresentation.jsx` muestra una vista previa.
3. Guardar y validar:
   - Al guardar, se muestran validaciones y mensajes en modal de confirmación.

Componentes relevantes:

- `cartGrid.jsx`, `piecesGrid.jsx`, `catalogsGrid.jsx`, `joinGrid.jsx`.

Consejos:

- Añade piezas desde la rejilla por arrastrar o botón `Agregar`.
- Revisa `requirementsGrid.jsx` para dependencias o reglas del puzzle.
