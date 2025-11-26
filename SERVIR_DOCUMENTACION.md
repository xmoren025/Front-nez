# 🚀 Cómo Servir la Documentación

Guía rápida para visualizar la documentación de Front-nez de forma local.

## Opción 1: MkDocs (Recomendado) ⭐

### Paso 1: Instalar MkDocs

En tu terminal (PowerShell en Windows):

```powershell
# Instalar pip si no lo tienes
python -m ensurepip --upgrade

# Instalar MkDocs y tema Material
pip install mkdocs mkdocs-material
```

### Paso 2: Navegar a la Carpeta del Proyecto

```powershell
cd c:\Users\estancia\Documents\GitHub\Front-nez
```

### Paso 3: Servir la Documentación

```powershell
mkdocs serve
```

**Salida esperada:**
```
INFO     -  Building documentation...
INFO     -  Cleaning site directory
INFO     -  Documentation built successfully
INFO     -  [00:00:00] Serving on http://127.0.0.1:8000/
```

### Paso 4: Abrir en Navegador

Abre tu navegador y ve a:
```
http://localhost:8000
```

✅ **¡Listo!** Verás la documentación en un sitio web profesional con:
- Navegación lateral
- Búsqueda en tiempo real
- Temas claro/oscuro
- Responsive design

---

## Opción 2: Compilar a HTML

Si prefieres generar archivos HTML estáticos:

### Paso 1: Instalar MkDocs

```powershell
pip install mkdocs mkdocs-material
```

### Paso 2: Compilar

```powershell
cd c:\Users\estancia\Documents\GitHub\Front-nez
mkdocs build
```

**Salida:**
```
INFO     -  Building documentation...
INFO     -  Cleaning site directory
INFO     -  Documentation built successfully
```

### Paso 3: Archivos Generados

Se crea carpeta `site/` con:
```
site/
├── index.html
├── guias/
│   ├── introduccion/index.html
│   ├── autenticacion/index.html
│   └── ...
├── flujos/
├── referencias/
└── assets/
```

### Paso 4: Servir HTML

**Opción A: Python (simple)**
```powershell
cd site
python -m http.server 8000
```

**Opción B: Node.js**
```powershell
npx http-server site -p 8000
```

**Opción C: Double-click en `index.html`**
- Abre `site/index.html` directamente en navegador
- No requiere servidor (funcionalidad limitada)

---

## Opción 3: Leer Archivos Markdown Directamente

### En GitHub

1. Abre: https://github.com/xmoren025/Front-nez
2. Navega a carpeta `docs/`
3. Haz clic en archivo `.md`
4. ✅ GitHub renderiza Markdown automáticamente

### En tu Editor

1. Abre VS Code o editor preferido
2. Navega a `c:\Users\estancia\Documents\GitHub\Front-nez\docs`
3. Abre archivo `.md`
4. Lee directamente o instala extensión Markdown

**Extensiones recomendadas para VS Code:**
- Markdown Preview Enhanced
- Markdown All in One

---

## 🔄 Actualizar Documentación en Tiempo Real

Con `mkdocs serve`, los cambios se reflejan automáticamente:

1. Abre `mkdocs serve` en terminal
2. Abre navegador en http://localhost:8000
3. Edita cualquier archivo `.md`
4. **Guarda el archivo**
5. Recarga navegador (F5 o Ctrl+R)
6. ¡Verás los cambios!

---

## ⚡ Atajos y Comandos Útiles

### MkDocs Comandos

```powershell
# Servir con debug verbose
mkdocs serve --verbose

# Compilar
mkdocs build

# Limpiar y compilar
mkdocs build --clean

# Ver versión
mkdocs --version

# Ver ayuda
mkdocs --help
```

### Navegador

| Atajo | Función |
|-------|---------|
| `Ctrl + /` | Abrir búsqueda |
| `Ctrl + F` | Buscar en página |
| `F5` | Recargar |
| `Shift + L` | Modo oscuro |

---

## 🎨 Personalizar Tema (Opcional)

### En `mkdocs.yml`

```yaml
theme:
  name: material
  language: es
  palette:
    # Cambiar color primario
    - scheme: light
      primary: blue      # Cambiar: blue, red, green, etc.
      accent: blue
```

**Colores disponibles:**
- blue, indigo, purple, pink, red, orange, yellow, lime, green, teal, cyan

### Recargar para ver cambios

```powershell
# Presiona Ctrl+C en terminal
# Luego ejecuta de nuevo
mkdocs serve
```

---

## 🐛 Solucionar Problemas

### "Puerto 8000 está en uso"

```powershell
# Especificar puerto diferente
mkdocs serve -a 127.0.0.1:8001

# Luego acceder a
# http://localhost:8001
```

### "mkdocs: comando no encontrado"

```powershell
# Instalar de nuevo
pip install --upgrade mkdocs mkdocs-material

# O usar con python
python -m mkdocs serve
```

### "Error al compilar"

```powershell
# Ver error detallado
mkdocs serve --verbose

# Revisa que mkdocs.yml sea válido (YAML correcto)
```

### "Cambios no se reflejan"

1. **Guarda el archivo** (.md)
2. **Recarga navegador** (F5)
3. Si persiste, reinicia `mkdocs serve`

---

## 📊 Verificar Documentación Compilada

Después de `mkdocs build`, verifica que todo esté bien:

```powershell
# Listar archivos generados
dir site/

# Ver tamaño
(dir site/ -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB

# Contar archivos HTML
(dir site/ -Filter *.html -Recurse).Count
```

---

## 🌐 Publicar Documentación Online

Opciones para publicar:

### GitHub Pages (Gratis)

```powershell
# MkDocs puede publicar automáticamente
mkdocs gh-deploy

# Acceder a
# https://xmoren025.github.io/Front-nez/
```

### Netlify (Gratis)

1. Compilar: `mkdocs build`
2. Subir carpeta `site/` a Netlify
3. Automático desde repositorio Git

### Servidor Web

1. Compilar: `mkdocs build`
2. Subir carpeta `site/` a tu servidor
3. Configurar Web Server (Apache, Nginx, etc.)

---

## 🎯 Flujo Recomendado

### Desarrollo Local

```powershell
# Terminal 1: Servir documentación
mkdocs serve

# Terminal 2: Editar archivos
# Abre VS Code, edita archivos .md
# Guarda cambios
# Recarga navegador para ver cambios
```

### Publicación

```powershell
# 1. Hacer cambios locales
# 2. Compilar
mkdocs build

# 3. Publicar (opción A: GitHub Pages)
mkdocs gh-deploy

# O (opción B: Servidor personal)
# Subir carpeta site/ a servidor
```

---

## 📝 Cheat Sheet Rápido

```powershell
# Instalar
pip install mkdocs mkdocs-material

# Navegar a proyecto
cd c:\Users\estancia\Documents\GitHub\Front-nez

# Servir (desarrollo)
mkdocs serve

# Compilar (HTML estático)
mkdocs build

# Publicar (GitHub Pages)
mkdocs gh-deploy

# Ver versión
mkdocs --version
```

---

## ✅ Verificación

Cuando abras http://localhost:8000 deberías ver:

- ✅ Página de inicio con índice
- ✅ 7 guías de usuario
- ✅ 4 flujos de trabajo
- ✅ 3 referencias técnicas
- ✅ Búsqueda funcional
- ✅ Navegación lateral
- ✅ Diseño responsive

---

## 🎉 ¡Listo!

Ahora puedes visualizar la documentación de Front-nez de forma profesional y fácil de navegar.

### Próximos pasos:

1. ✅ Servir documentación: `mkdocs serve`
2. ✅ Abrir http://localhost:8000
3. ✅ Navegar y explorar
4. ✅ Compartir con tu equipo
5. ✅ ¡Disfrutar!

---

**¿Preguntas?** Consulta la documentación misma o revisa [README.md](README.md).
