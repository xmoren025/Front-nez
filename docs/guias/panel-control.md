# Panel de Control (Dashboard)

## Descripción General

El Dashboard es el corazón de Front-nez. Después de iniciar sesión, aquí encontrarás acceso a todas las funciones principales de la aplicación.

## Estructura del Dashboard

```
Dashboard
├── Barra de Navegación Superior
│   ├── Logo / Inicio
│   ├── Usuario y Preferencias
│   └── Cierre de Sesión
├── Menú Lateral Izquierdo
│   ├── Home
│   ├── Crear Puzzle
│   ├── Listar Puzzles
│   └── Catálogos
└── Área Principal (Contenido)
    ├── Widgets informativos
    ├── Lista de puzzles recientes
    └── Acciones rápidas
```

## Componentes Principales

### Barra de Navegación Superior

**Ubicación:** Parte superior de la pantalla

| Elemento | Función |
|----------|---------|
| Logo | Haz clic para volver al inicio del Dashboard |
| Búsqueda Global | Campo para buscar puzzles rápidamente |
| Tu Nombre | Muestra tu usuario actual |
| Avatar | Haz clic para acceder a preferencias |
| Cerrar Sesión | Cierra tu sesión actual |

### Menú Lateral Izquierdo

**Ubicación:** Lado izquierdo de la pantalla

- **Home** - Vuelve a la pantalla principal del Dashboard
- **Crear Puzzle** - Abre el constructor de puzzles
- **Listar Puzzles** - Muestra todos tus puzzles
- **Catálogos** - Gestiona tus catálogos de componentes

## Vistas del Dashboard

### Vista Home

La pantalla de inicio del Dashboard muestra:

1. **Estadísticas Rápidas**
   - Cantidad de puzzles creados
   - Cantidad de catálogos
   - Últimas acciones

2. **Puzzles Recientes**
   - Los puzzles que creaste o editaste recientemente
   - Haz clic en uno para abrirlo

3. **Acciones Rápidas**
   - Botón para crear un nuevo puzzle
   - Acceso directo a catálogos
   - Opciones de búsqueda avanzada

4. **Información de Organización** (si aplica)
   - Nombre de tu organización
   - Miembros del equipo
   - Proyectos compartidos

### Crear Puzzle

Para acceder al constructor de puzzles:

1. **Haz clic en "Crear Puzzle"** - En el menú lateral
2. Se abrirá la [interfaz de creación](crear-puzzle.md)
3. Sigue los pasos para construir tu puzzle

Ver guía completa: [Crear Puzzle](crear-puzzle.md)

### Listar Puzzles

Para ver todos tus puzzles:

1. **Haz clic en "Listar Puzzles"** - En el menú lateral
2. Verás una lista de todos tus puzzles creados
3. Para cada puzzle puedes:
   - **Ver** - Abre el puzzle
   - **Editar** - Modifica el puzzle
   - **Compartir** - Comparte con otros usuarios
   - **Eliminar** - Borra el puzzle
   - **Duplicar** - Crea una copia

### Catálogos

Para gestionar tus catálogos:

1. **Haz clic en "Catálogos"** - En el menú lateral
2. Verás tus catálogos organizados
3. Puedes:
   - **Ver catálogo** - Abre para ver detalles
   - **Crear nuevo** - Haz clic en el botón "Crear Catálogo"
   - **Editar** - Modifica un catálogo existente
   - **Eliminar** - Borra un catálogo

Ver guía completa: [Gestión de Catálogos](../flujos/catalogos.md)

## Controles de Usuario

### Acceder a Preferencias

1. **Haz clic en tu avatar** - Parte superior derecha
2. Se abrirá un menú con opciones:
   - Mi Perfil
   - Configuración
   - Preferencias de Notificaciones
   - Cerrar Sesión

### Cambiar Tu Perfil

1. **Ve a Preferencias → Mi Perfil**
2. Puedes actualizar:
   - Nombre
   - Correo
   - Foto de perfil
   - Biografía (opcional)
3. **Haz clic en "Guardar Cambios"**

### Configuración de Privacidad

1. **Ve a Preferencias → Configuración**
2. Controla quién puede:
   - Ver tus puzzles
   - Comentar en tus puzzles
   - Compartir tus puzzles
3. **Guarda los cambios**

## Navegación Rápida

### Atajos de Teclado

- `Ctrl + K` (Windows) o `Cmd + K` (Mac) - Abre búsqueda global
- `Alt + H` - Va a Home
- `Alt + N` - Crear Nuevo Puzzle
- `Alt + L` - Listar Puzzles
- `Alt + C` - Ir a Catálogos

### Búsqueda Global

1. **Presiona `Ctrl + K`** - O haz clic en el campo de búsqueda
2. **Escribe lo que buscas** - Puzzle, catálogo, usuario, etc.
3. **Selecciona un resultado** - Se abrirá directamente
4. **Presiona Escape** - Para cerrar la búsqueda

## Troubleshooting

### "No veo mis puzzles"
- Verifica que hayas iniciado sesión
- Intenta actualizar la página (F5)
- Revisa tu conexión a internet

### "El menú lateral desapareció"
- Busca el botón de menú (hamburguesa ≡)
- Haz clic para abrir el menú lateral
- Algunos navegadores lo ocultan en pantallas pequeñas

### "No puedo editar un puzzle"
- Asegúrate de ser el propietario del puzzle
- Si fue compartido contigo, puede que no tengas permisos de edición
- Contacta al propietario para pedir acceso

---

**Siguiente paso:** [Aprende a Crear Puzzles](crear-puzzle.md)
