# Gestión de Piezas

Guía completa para crear, editar, organizar y usar piezas en Front-nez.

## ¿Qué es una Pieza?

Una **pieza** es el componente fundamental de un puzzle. Representa:

- 🧩 Un concepto o idea
- 📝 Información educativa
- 🎯 Un objetivo o paso
- 🔗 Un elemento conectado en una cadena

Las piezas se pueden:
- Crear desde cero
- Reutilizar en múltiples puzzles
- Organizar en catálogos
- Compartir con otros usuarios

## Acceder a Piezas

### Desde el Editor de Puzzles

1. **Abre un puzzle para editar**
2. **Panel izquierdo** - "Piezas"
3. Verás todas las piezas disponibles
4. Búsqueda arriba del panel

### Desde Dashboard

Actualmente, no hay sección directa de "Piezas". Se gestionan:
- Dentro de puzzles (editando)
- Dentro de catálogos

## Crear una Pieza

### Método 1: Desde el Editor de Puzzles

1. **Abre un puzzle** para editar
2. **Panel izquierdo**, busca **"Crear Nueva Pieza"** - Botón
3. **Se abre el formulario:**
   - Nombre
   - Descripción
   - Tipo (categoria)
   - Contenido (texto, imagen, etc.)
4. **Haz clic en "Crear"**
5. La pieza aparecerá en el listado
6. **Arrastra al lienzo** para usarla

### Método 2: Desde un Catálogo

1. **Ve a "Catálogos"** - Menú lateral
2. **Abre un catálogo** - Haz clic en uno
3. **Haz clic en "Agregar Pieza"** - Botón
4. **Crea una nueva pieza:**
   - Nombre
   - Descripción
   - Tipo
   - Contenido
5. **Haz clic en "Agregar"**
6. La pieza se añade al catálogo

## Tipos de Piezas

Depending de tu configuración, puedes tener tipos:

| Tipo | Uso |
|------|-----|
| **Texto** | Contenido de texto simple |
| **Imagen** | Fotos o gráficos |
| **Video** | Videos educativos |
| **Pregunta** | Preguntas de opción múltiple |
| **Contenedor** | Agrupa otras piezas |
| **Conexión** | Vincula ideas |
| **Acción** | Botones o interacciones |
| **Personalizado** | Definido por tu organización |

## Editar una Pieza

### Cambiar Propiedades Básicas

1. **Selecciona la pieza** - Haz clic en ella en el lienzo
2. **Panel derecho** - Se abre "Propiedades"
3. Modifica:
   - Nombre
   - Descripción
   - Tipo
   - Contenido
4. **Haz clic en "Guardar"**

### Cambiar Apariencia

En el panel derecho (Propiedades):

1. **Color** - Haz clic en la muestra de color
2. **Tamaño** - Ajusta ancho y alto
3. **Posición** - Coordenadas X, Y
4. **Rotación** - Ángulo de giro
5. **Opacidad** - Transparencia
6. **Orden de capas** - Adelante/Atrás

**Ejemplo:**
```
Nombre: "Fase G1 de Mitosis"
Color: Verde claro (#90EE90)
Tamaño: 200x100 píxeles
Posición: X=100, Y=50
```

3. Haz clic en "Guardar"

## Conectar Piezas

### Crear una Conexión

1. **Selecciona la pieza de origen** - Haz clic
2. **Busca puntos de conexión** - Pequeños círculos en bordes
3. **Arrastra desde el punto** - De la pieza origen
4. **Hacia la pieza destino**
5. **Suelta en un punto** - De la otra pieza
6. Se crea una línea de conexión

### Tipos de Conexiones

| Tipo | Significa |
|------|-----------|
| Línea recta | Conexión simple |
| Flecha | Flujo direccional |
| Punteada | Conexión débil/opcional |
| Gruesa | Conexión fuerte/principal |
| Coloreada | Tipo específico de conexión |

### Editar una Conexión

1. **Haz clic en la línea de conexión**
2. Se abre el panel de propiedades de conexión
3. Modifica:
   - Tipo de línea
   - Color
   - Etiqueta
   - Dirección
4. **Haz clic en "Guardar"**

### Eliminar una Conexión

1. **Haz clic en la línea**
2. **Presiona Delete**
3. O haz clic en **"Eliminar"** en propiedades

## Propiedades Avanzadas de Piezas

### Restricciones de Conexión

Algunas piezas tienen restricciones:

| Propiedad | Descripción |
|-----------|-------------|
| **Max conexiones de entrada** | Cuántas piezas pueden apuntar a esta |
| **Max conexiones de salida** | A cuántas puede apuntar esta |
| **Tipos permitidos** | Qué tipos de piezas se conectan |
| **Obligatoria** | Debe estar conectada |

### Comportamiento

- **Visible:** Aparece o se oculta
- **Seleccionable:** El usuario puede hacer clic
- **Editable:** El usuario puede modificar
- **Eliminable:** El usuario puede borrar
- **Bloqueada:** No se puede modificar

### Validación

Si tu pieza tiene validación:

1. **Haz clic en "Validación"** - En propiedades
2. **Define reglas:**
   - Contenido requerido
   - Formato específico
   - Rango de valores
3. **Guarda**

## Organizar Piezas

### Agrupar Piezas

Si quieres que múltiples piezas funcionen como una unidad:

1. **Selecciona varias piezas:**
   - Haz clic en una
   - Presiona Ctrl y haz clic en otras
   - O arrastra un rectángulo alrededor de varias
2. **Haz clic derecho** - Menú contextual
3. **Selecciona "Agrupar"**
4. Ahora se mueven juntas
5. Para desagrupar, haz clic derecho en grupo y "Desagrupar"

### Distribuir Piezas

Para espaciar uniformemente:

1. **Selecciona piezas** - Múltiples piezas
2. **Haz clic en "Alinear"** o icono de distribución
3. **Elige:**
   - Alinear izquierda, derecha, arriba, abajo
   - Distribuir horizontal o verticalmente
   - Espaciar uniformemente

### Capas (Z-Order)

Para controlar qué está adelante/atrás:

1. **Selecciona una pieza**
2. **Panel derecho**, busca "Orden de capas"
3. **Opciones:**
   - Traer al frente
   - Enviar al fondo
   - Traer adelante un nivel
   - Enviar atrás un nivel

## Usar Piezas de Catálogos

### Insertar desde Catálogo

1. **En el editor de puzzle**
2. **Ve a la pestaña "Catálogos"** - Panel izquierdo
3. **Selecciona un catálogo**
4. **Arrastra una pieza** - Al lienzo
5. **Suelta** en la posición
6. La pieza se agrega a tu puzzle

### Actualizar desde Catálogo

Si editas una pieza en el catálogo:

1. Los puzzles existentes **NO se actualizan automáticamente**
2. Es una copia independiente
3. Si quieres la versión nueva, duplica la pieza del catálogo

## Copiar y Duplicar Piezas

### Copiar una Pieza

1. **Selecciona la pieza** - En el lienzo
2. **Presiona Ctrl + C** - Copiar
3. **Presiona Ctrl + V** - Pegar
4. Se crea una duplicada
5. Muévela a nueva posición

### Copiar Estilo

Si quieres copiar propiedades (color, tamaño) a otra pieza:

1. **Selecciona la pieza de origen**
2. **Haz clic en "Copiar Estilo"** - Si disponible
3. **Selecciona la pieza destino**
4. **Haz clic en "Aplicar Estilo"**
5. Se copian las propiedades visuales

## Eliminar Piezas

### Eliminar una Pieza

1. **Selecciona la pieza** - Haz clic
2. **Presiona Delete** - Tecla de suprimir
3. O haz clic en "Eliminar" en propiedades
4. **Confirma** si se pide
5. La pieza se elimina (sus conexiones también)

### Eliminar Múltiples

1. **Selecciona varias piezas** - Ctrl + clic o arrastra rectángulo
2. **Presiona Delete**
3. **Confirma**
4. Se eliminan todas

## Búsqueda y Filtro de Piezas

### Buscar Piezas

En el panel de piezas:

1. **Campo de búsqueda** - Parte superior
2. **Escribe lo que buscas:**
   - Nombre de pieza
   - Tipo
   - Contenido
3. **Resultados en tiempo real**

### Filtrar por Tipo

En el panel de piezas:

1. **Botones de filtro** - Si están disponibles
2. **Haz clic en un tipo:**
   - Mostrar solo piezas de ese tipo
3. **Haz clic otra vez** - Para deseleccionar

## Solucionar Problemas

### "No puedo conectar dos piezas"

Posibles razones:
- La pieza origen ya tiene máximo de conexiones de salida
- La pieza destino ya tiene máximo de conexiones de entrada
- Los tipos no son compatibles
- Una está bloqueada

**Solución:**
1. Verifica propiedades de ambas piezas
2. Lee las restricciones
3. Cambia tipo si es posible
4. Elimina conexiones extras si es necesario

### "Mi pieza desapareció"

1. **Ctrl + Z** - Deshacer la última acción
2. **Presiona Ctrl + A** - Selecciona todo, verifica
3. **Busca en panel izquierdo** - Puede estar oculta
4. Contacta soporte si no la encuentra

### "Las piezas se superponen"

1. **Selecciona una pieza**
2. **Usa los atajos de capas:**
   - Traer al frente
   - Enviar al fondo
3. O **arrastra** para mover la posición

### "Cambios no se guardan"

1. **Haz clic en "Guardar"** - Explícitamente
2. **Verifica conexión a internet**
3. **Actualiza la página** - F5
4. **Prueba en otro navegador**

---

**Siguiente paso:** [Gestionar catálogos](catalogos.md)
