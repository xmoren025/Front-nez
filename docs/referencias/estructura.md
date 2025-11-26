# Estructura del Proyecto

Mapeo de la estructura del proyecto Front-nez y cómo relaciona con la interfaz gráfica.

## Estructura de Carpetas Principal

```
Front-nez/
├── src/                          # Código fuente
│   ├── app/                      # Rutas de Next.js (páginas)
│   ├── components/               # Componentes reutilizables
│   ├── services/                 # Servicios API
│   ├── styles/                   # Estilos globales
│   └── utils/                    # Utilidades y helpers
├── public/                       # Archivos estáticos
├── docs/                         # Documentación (esta carpeta)
├── package.json                  # Dependencias
├── next.config.mjs               # Configuración Next.js
├── tailwind.config.js            # Configuración Tailwind CSS
├── mkdocs.yml                    # Configuración de documentación
└── README.md                     # Descripción general
```

## Secciones Detalladas

### `src/app/` - Rutas y Páginas

Estructura de páginas de la aplicación (Next.js App Router):

```
src/app/
├── layout.js                     # Layout principal de la app
├── page.js                       # Página de inicio (/
├── auth/                         # Rutas de autenticación
│   ├── login/
│   │   └── page.js              # Página de inicio de sesión
│   ├── register-user/
│   │   └── page.js              # Registro de usuario individual
│   ├── register-organization/
│   │   └── page.js              # Registro de organización
│   └── forgot-password/
│       └── page.js              # Recuperación de contraseña
└── dashboard/                    # Rutas del dashboard (protegidas)
    ├── home/
    │   └── page.js              # Página principal del dashboard
    ├── create-puzzle/
    │   └── page.js              # Editor/creador de puzzles
    ├── list-puzzles/
    │   ├── page.js              # Lista de puzzles
    │   └── puzzle/
    │       └── page.js          # Detalles de puzzle individual
    └── catalogs/
        └── page.js              # Gestión de catálogos
```

#### Mapeo UI a Archivos

| Página en UI | Archivo | Función |
|--------------|---------|---------|
| Login | `auth/login/page.js` | Formulario y lógica de login |
| Registro Usuario | `auth/register-user/page.js` | Formulario de registro individual |
| Registro Org | `auth/register-organization/page.js` | Formulario de organización |
| Olvídé contraseña | `auth/forgot-password/page.js` | Recuperación de contraseña |
| Dashboard Principal | `dashboard/home/page.js` | Panel de control y accesos rápidos |
| Crear Puzzle | `dashboard/create-puzzle/page.js` | Editor visual con drag & drop |
| Listar Puzzles | `dashboard/list-puzzles/page.js` | Tabla/lista de puzzles |
| Detalles Puzzle | `dashboard/list-puzzles/puzzle/page.js` | Ver detalles de un puzzle |
| Catálogos | `dashboard/catalogs/page.js` | Gestión de catálogos |

### `src/components/` - Componentes Reutilizables

Estructura de componentes de UI:

```
src/components/
├── navBar.jsx                    # Barra de navegación superior
├── NavBar.module.css             # Estilos de navbar
├── searchbar.jsx                 # Campo de búsqueda
├── SearchBar.module.css          # Estilos de búsqueda
├── infoTable.jsx                 # Tabla de información
├── InfoTable.module.css          # Estilos de tabla
├── gallery.jsx                   # Galería de componentes
├── Gallery.module.css            # Estilos de galería
├── customTabsBoard.jsx           # Sistema de tabs
├── CustomTabsBoard.module.css    # Estilos de tabs
│
├── buttons/                      # Componentes de botones
│   ├── actionButton.jsx          # Botón genérico de acción
│   ├── addButton.jsx             # Botón para agregar
│   ├── backButton.jsx            # Botón volver
│   ├── cancelButton.jsx          # Botón cancelar
│   ├── clearButton.jsx           # Botón limpiar
│   ├── closeButton.jsx           # Botón cerrar
│   ├── createButton.jsx          # Botón crear
│   ├── deleteButton.jsx          # Botón eliminar
│   ├── editButton.jsx            # Botón editar
│   ├── nextButton.jsx            # Botón siguiente
│   ├── removeButton.jsx          # Botón remover
│   └── saveButton.jsx            # Botón guardar
│
├── cards/                        # Componentes de tarjetas
│   ├── CardsComponent.module.css # Estilos generales
│   ├── catalogComponent.jsx      # Tarjeta de catálogo
│   ├── elementSelected.jsx       # Elemento seleccionado
│   ├── pieceComponent.jsx        # Tarjeta de pieza
│   └── requirementComponent.jsx  # Tarjeta de requisito
│
├── createPuzzleTabsContent/      # Contenido de pestañas en editor
│   ├── cartGrid.jsx              # Carrito de compras (si aplica)
│   ├── catalogsGrid.jsx          # Grilla de catálogos
│   ├── joinGrid.jsx              # Grilla de uniones/conexiones
│   ├── piecesGrid.jsx            # Grilla de piezas disponibles
│   ├── puzzleRepresentation.jsx  # Vista previa del puzzle
│   ├── requirementsGrid.jsx      # Grilla de requisitos
│   └── TabsContentGrids.module.css # Estilos compartidos
│
├── dragDrop/                     # Componentes drag & drop
│   ├── dragNDropElement.jsx      # Elemento arrastrablе
│   ├── dragNDropList.jsx         # Lista con drag & drop
│   ├── workspace.jsx             # Área de trabajo principal
│   ├── DragNDrop.module.css      # Estilos drag & drop
│   └── Workspace.module.css      # Estilos del workspace
│
├── forms/                        # Formularios de entrada
│   ├── Forms.module.css          # Estilos compartidos
│   ├── loginForm.jsx             # Formulario de login
│   ├── registerUserForm.jsx      # Formulario registro usuario
│   ├── registerOrgForm.jsx       # Formulario registro org
│   ├── forgotPasswordForm.jsx    # Formulario recuperación
│   └── resetPasswordForm.jsx     # Formulario reset contraseña
│
├── modals/                       # Ventanas modales
│   ├── Modals.module.css         # Estilos compartidos
│   ├── createCatalogModal.jsx    # Modal crear catálogo
│   ├── createPieceModal.jsx      # Modal crear pieza
│   ├── saveServiceModal.jsx      # Modal guardar servicio
│   └── shareModal.jsx            # Modal compartir puzzle
│
├── examples/                     # Ejemplos de componentes
│   ├── boardExample.jsx          # Ejemplo de tablero
│   └── tableExample.jsx          # Ejemplo de tabla
└── (otros componentes)           # Componentes especializados
```

### Mapeo de Componentes a Interfaz

| Componente | Ubicación en UI | Propósito |
|-----------|-----------------|----------|
| `navBar.jsx` | Barra superior | Navegación principal |
| `searchbar.jsx` | Barra superior | Campo de búsqueda |
| `buttons/*` | Múltiples | Interacciones usuario |
| `dragNDropElement.jsx` | Editor puzzle | Piezas arrastrables |
| `workspace.jsx` | Editor puzzle | Lienzo de trabajo |
| `customTabsBoard.jsx` | Editor puzzle | Sistema de pestañas |
| `catalogsGrid.jsx` | Pestaña catálogos | Lista de catálogos |
| `piecesGrid.jsx` | Panel izquierdo | Lista de piezas |
| `createCatalogModal.jsx` | Catálogos | Modal crear catálogo |
| `createPieceModal.jsx` | Editor | Modal crear pieza |
| `shareModal.jsx` | Puzzles | Modal compartir |
| `loginForm.jsx` | Página login | Formulario autenticación |
| `registerUserForm.jsx` | Registro usuario | Formulario registro |

### `src/services/` - Servicios API

```
src/services/
├── catalogAPI.js                 # Llamadas API para catálogos
└── (otros servicios)             # Servicios adicionales
```

**Funciones típicas:**
- Obtener catálogos
- Crear catálogo
- Editar catálogo
- Eliminar catálogo
- Obtener piezas
- Crear pieza
- Etc.

### `src/styles/` - Estilos

```
src/styles/
└── globals.css                   # Estilos globales
```

**Utiliza Tailwind CSS** para estilos (configurado en `tailwind.config.js`).

## Flujo de Datos

### Ejemplo: Crear Puzzle

```
User clicks "Crear Puzzle" button
          ↓
     page.js (create-puzzle)
          ↓
Form component (formulario.jsx)
          ↓
API call (services/api.js)
          ↓
Backend saves puzzle
          ↓
Update UI with new puzzle
```

### Ejemplo: Arrastrar Pieza

```
User drags piece from panel
          ↓
dragNDropElement.jsx (detecta drag)
          ↓
workspace.jsx (recibe drop)
          ↓
State update en page.js
          ↓
UI re-renders con nueva pieza
```

## Estilos y Temas

### CSS Modules

Cada componente tiene su archivo CSS:
- `NavBar.jsx` → `NavBar.module.css`
- `Gallery.jsx` → `Gallery.module.css`

**Ventaja:** Estilos aislados, sin conflictos

### Tailwind CSS

Configurado en `tailwind.config.js` para:
- Colores personalizados
- Espaciamiento
- Tipografía
- Responsive design

**Uso:** Clases de utilidad en JSX
```jsx
<div className="bg-blue-500 p-4 rounded-lg">
  Contenido
</div>
```

## Dependencias Principales

Ver `package.json`:

- **Next.js 15.5.5** - Framework React
- **React 19.1.0** - Librería UI
- **Tailwind CSS 4** - Estilos
- **@hello-pangea/dnd** - Drag and drop
- **@mui/icons-material** - Iconos
- **Emotion** - CSS-in-JS

## Cómo Navegar el Código

### Para encontrar una página:
1. Ve a `src/app/[ruta]/page.js`
2. Ejemplo: `/dashboard/home` → `src/app/dashboard/home/page.js`

### Para encontrar un componente:
1. Busca en `src/components/`
2. Por nombre o categoría
3. El archivo `.module.css` tiene los estilos

### Para entender un flujo:
1. Comienza por `page.js`
2. Sigue los imports a componentes
3. Busca llamadas a API en `src/services/`
4. Revisa cambios de estado (useState, etc.)

## Configuración

### Next.js (`next.config.mjs`)
- Turbopack habilitado (compilación rápida)
- Optimizaciones de rendimiento

### Tailwind (`tailwind.config.js`)
- Tema personalizado
- Extensiones de colores
- Breakpoints responsive

### ESLint (`eslint.config.mjs`)
- Validación de código
- Estilo consistente

## Estructura de Datos Típica

### Puzzle
```javascript
{
  id: "puzzle-1",
  name: "Mitosis",
  description: "Proceso celular...",
  category: "Biología",
  difficulty: "medium",
  privacy: "shared",
  pieces: [...],
  connections: [...],
  owner: "user-1",
  createdAt: "2025-11-26",
  updatedAt: "2025-11-26"
}
```

### Piece
```javascript
{
  id: "piece-1",
  name: "Profase",
  type: "concept",
  description: "Primera fase...",
  color: "#FF5733",
  size: { width: 200, height: 100 },
  position: { x: 100, y: 50 },
  connections: { input: 0, output: 2 }
}
```

### Catalog
```javascript
{
  id: "catalog-1",
  name: "Procesos Celulares",
  description: "Componentes reutilizables...",
  category: "Biología",
  pieces: [...],
  owner: "org-1",
  privacy: "shared"
}
```

---

¡Esta estructura facilita el desarrollo y mantenimiento del proyecto!
