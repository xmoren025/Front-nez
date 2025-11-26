# Componentes Principales

Descripción detallada de los componentes principales de la interfaz gráfica.

## Sistema de Navegación

### NavBar (Barra Superior)

**Ubicación:** Parte superior de la página  
**Archivo:** `src/components/navBar.jsx`  
**Estilos:** `src/components/NavBar.module.css`

**Elementos:**
- **Logo** - Haz clic para volver a inicio
- **Búsqueda global** - Campo para búsqueda rápida
- **Usuario** - Muestra nombre/avatar actual
- **Menú usuario** - Preferencias, cerrar sesión
- **Notificaciones** - (si está implementado)

**Propiedades:**
```jsx
<NavBar>
  user={currentUser}
  onSearch={handleSearch}
  onLogout={handleLogout}
/>
```

### SearchBar (Búsqueda)

**Ubicación:** Barra de navegación  
**Archivo:** `src/components/searchbar.jsx`  
**Estilos:** `src/components/SearchBar.module.css`

**Características:**
- Búsqueda en tiempo real
- Autocompletado
- Filtros (si aplica)
- Resultados instantáneos

```jsx
<SearchBar 
  placeholder="Buscar puzzle, catálogo..."
  onSearch={handleSearch}
  suggestions={searchSuggestions}
/>
```

## Sistema de Pestañas

### CustomTabsBoard

**Ubicación:** Editor de puzzles, formularios  
**Archivo:** `src/components/customTabsBoard.jsx`  
**Estilos:** `src/components/CustomTabsBoard.module.css`

**Función:** Sistema de pestañas personalizado

**Propiedades:**
```jsx
<CustomTabsBoard 
  tabs={[
    { label: "Piezas", content: <PiecesGrid /> },
    { label: "Catálogos", content: <CatalogsGrid /> },
    { label: "Conexiones", content: <JoinGrid /> }
  ]}
  onTabChange={handleTabChange}
/>
```

## Componentes de Piezas y Catálogos

### PiecesGrid (Grilla de Piezas)

**Ubicación:** Panel izquierdo del editor  
**Archivo:** `src/components/createPuzzleTabsContent/piecesGrid.jsx`

**Muestra:**
- Lista de piezas disponibles
- Búsqueda y filtros
- Información por pieza
- Opción para seleccionar/arrastrar

### CatalogsGrid (Grilla de Catálogos)

**Ubicación:** Pestaña "Catálogos" en editor  
**Archivo:** `src/components/createPuzzleTabsContent/catalogsGrid.jsx`

**Características:**
- Muestra catálogos disponibles
- Permite expandir para ver piezas
- Drag & drop desde catálogos

### JoinGrid (Grilla de Conexiones)

**Ubicación:** Pestaña "Uniones" en editor  
**Archivo:** `src/components/createPuzzleTabsContent/joinGrid.jsx`

**Función:**
- Mostrar conexiones existentes
- Crear nuevas conexiones
- Editar/eliminar conexiones

## Drag and Drop

### Workspace (Área de Trabajo)

**Ubicación:** Centro del editor  
**Archivo:** `src/components/dragDrop/workspace.jsx`  
**Estilos:** `src/components/dragDrop/Workspace.module.css`

**Propósito:** Lienzo principal para arrastrar y soltar piezas

**Características:**
- Detect drag events
- Drop zone
- Renderiza piezas
- Maneja conexiones
- Zoom/Pan (si aplica)

```jsx
<Workspace
  pieces={pieces}
  connections={connections}
  onDropPiece={handleDropPiece}
  onDragPiece={handleDragPiece}
/>
```

### DragNDropElement (Elemento Arrastrable)

**Ubicación:** Dentro de workspace  
**Archivo:** `src/components/dragDrop/dragNDropElement.jsx`

**Función:** Representa una pieza individual en el lienzo

**Propiedades:**
```jsx
<DragNDropElement
  piece={piece}
  isDragging={isDragging}
  isSelected={isSelected}
  onDrag={handleDrag}
  onSelect={handleSelect}
  onDelete={handleDelete}
/>
```

### DragNDropList (Lista con Drag & Drop)

**Ubicación:** Panel de piezas disponibles  
**Archivo:** `src/components/dragDrop/dragNDropList.jsx`

**Función:** Lista de componentes arrastrables

## Componentes de Tarjetas

### Cards Module

**Ubicación:** Múltiples lugares  
**Archivo base:** `src/components/cards/CardsComponent.module.css`

#### CatalogComponent
- **Uso:** Tarjeta de catálogo en listado
- **Muestra:** Nombre, descripción, cantidad de piezas
- **Acciones:** Ver, editar, eliminar, compartir

#### PieceComponent
- **Uso:** Tarjeta de pieza en galería
- **Muestra:** Nombre, tipo, descripción
- **Acciones:** Seleccionar, arrastrar

#### RequirementComponent
- **Uso:** Tarjeta de requisito
- **Muestra:** Requisito, descripción, estado
- **Acciones:** Editar, eliminar

#### ElementSelected
- **Uso:** Elemento seleccionado en editor
- **Muestra:** Propiedades detalladas
- **Permite:** Editar propiedades

## Formularios

### Forms Module

**Ubicación:** Páginas de autenticación y creación  
**Archivo base:** `src/components/forms/Forms.module.css`

#### LoginForm
- **Campos:** Email, contraseña
- **Validaciones:** Email válido, contraseña requerida
- **Acciones:** Login, "Olvídé contraseña"

#### RegisterUserForm
- **Campos:** Nombre, email, contraseña, confirmar
- **Validaciones:** Email único, contraseña fuerte
- **Acciones:** Crear cuenta

#### RegisterOrgForm
- **Campos:** Nombre org, email admin, contraseña, detalles
- **Validaciones:** Nombre único, datos válidos
- **Acciones:** Crear organización

#### ForgotPasswordForm
- **Campos:** Email
- **Validación:** Email válido
- **Acción:** Enviar enlace recuperación

#### ResetPasswordForm
- **Campos:** Nueva contraseña, confirmar
- **Validaciones:** Contraseña fuerte, coinciden
- **Acción:** Restablecer contraseña

## Botones Especializados

### Buttons Module

Ubicación: `src/components/buttons/`

**Tipos disponibles:**

| Botón | Uso | Icono |
|-------|-----|-------|
| `ActionButton` | Acción genérica | Personalizado |
| `AddButton` | Agregar elemento | + |
| `BackButton` | Volver atrás | ← |
| `CancelButton` | Cancelar operación | ✕ |
| `ClearButton` | Limpiar formulario | 🗑️ |
| `CloseButton` | Cerrar modal/panel | ✕ |
| `CreateButton` | Crear nuevo | + |
| `DeleteButton` | Eliminar elemento | 🗑️ |
| `EditButton` | Editar elemento | ✏️ |
| `NextButton` | Siguiente paso | → |
| `RemoveButton` | Remover elemento | − |
| `SaveButton` | Guardar cambios | 💾 |

**Uso:**
```jsx
<SaveButton onClick={handleSave} disabled={!hasChanges} />
<DeleteButton onClick={handleDelete} danger />
<NextButton onClick={handleNext} />
```

## Modales

### Modals Module

**Ubicación:** `src/components/modals/`  
**Estilos:** `src/components/modals/Modals.module.css`

#### CreateCatalogModal
- **Trigger:** Botón "Crear Catálogo"
- **Campos:** Nombre, descripción, categoría
- **Acción:** Crear catálogo

#### CreatePieceModal
- **Trigger:** Botón "Crear Pieza"
- **Campos:** Nombre, tipo, descripción, propiedades
- **Acción:** Crear pieza

#### SaveServiceModal
- **Trigger:** Al guardar puzzle
- **Opciones:** Guardar, guardar como, cancelar
- **Manejo:** Confirmación y alertas

#### ShareModal
- **Trigger:** Botón "Compartir"
- **Campos:** Email/usuario, permisos, privacidad
- **Acción:** Compartir recurso

## Tablas e Información

### InfoTable

**Ubicación:** Listados  
**Archivo:** `src/components/infoTable.jsx`  
**Estilos:** `src/components/InfoTable.module.css`

**Características:**
- Columnas personalizables
- Ordenamiento
- Paginación
- Acciones por fila
- Búsqueda/filtros

```jsx
<InfoTable
  columns={[
    { header: "Nombre", accessor: "name" },
    { header: "Categoría", accessor: "category" },
    { header: "Acciones", render: (row) => <Actions /> }
  ]}
  data={puzzles}
  onSort={handleSort}
/>
```

## Galería

### Gallery

**Ubicación:** Visualización de componentes  
**Archivo:** `src/components/gallery.jsx`  
**Estilos:** `src/components/Gallery.module.css`

**Función:**
- Mostrar piezas en vista de galería
- Cards con información
- Búsqueda y filtros
- Selección múltiple (opcional)

## Stepper (Pasos)

### StepperElement

**Ubicación:** Flujos multipasos  
**Archivo:** `src/components/stepperElement.jsx`  
**Estilos:** `src/components/Stepper.module.css`

**Muestra:**
- Pasos del proceso
- Paso actual destacado
- Navegación entre pasos
- Progreso visual

```jsx
<StepperElement
  steps={["Info Básica", "Piezas", "Conexiones", "Guardar"]}
  activeStep={currentStep}
  onStepChange={handleStepChange}
/>
```

## Visualización de Puzzles

### PuzzleRepresentation

**Ubicación:** Pestaña de representación visual  
**Archivo:** `src/components/createPuzzleTabsContent/puzzleRepresentation.jsx`

**Función:**
- Vista previa del puzzle
- Representación visual mejorada
- Opciones de layout
- Exportar como imagen (opcional)

## Componentes de Ejemplo

### BoardExample
- Ejemplo de tablero/canvas
- Demuestra patrones de diseño

### TableExample
- Ejemplo de tabla
- Muestra uso de DataGrid

---

## Patrones de Uso Comunes

### Agregar un componente a una página:

```jsx
import CustomTabsBoard from '@/components/customTabsBoard';

export default function MyPage() {
  return (
    <CustomTabsBoard 
      tabs={[
        { label: "Tab 1", content: <Content1 /> },
        { label: "Tab 2", content: <Content2 /> }
      ]}
    />
  );
}
```

### Props comunes:

```jsx
{
  // Datos
  data: [],
  
  // Handlers
  onChange: (value) => {},
  onSubmit: (data) => {},
  onDelete: (id) => {},
  
  // Estado
  loading: false,
  error: null,
  
  // UI
  disabled: false,
  className: "",
  style: {}
}
```

---

Estos componentes forman la base de la interfaz gráfica de Front-nez.
