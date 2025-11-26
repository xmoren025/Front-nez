# 📚 Documentación de Front-nez

Bienvenido a la documentación oficial de Front-nez. Este es un **manual de usuario completo** con guías paso a paso sobre cómo navegar y usar todas las interfaces gráficas de la aplicación.

## 📖 Contenido Disponible

### 🎯 Guías de Usuario (Para todos)
Tutoriales completos sobre cómo usar cada sección:

- **[Introducción](docs/guias/introduccion.md)** - ¿Qué es Front-nez y cómo empezar?
- **[Autenticación](docs/guias/autenticacion.md)** - Crear cuenta, login y recuperar contraseña
- **[Panel de Control](docs/guias/panel-control.md)** - Explorar el dashboard principal
- **[Crear Puzzle](docs/guias/crear-puzzle.md)** - Constructor visual paso a paso
- **[Catálogos](docs/guias/catalogos.md)** - Gestionar componentes reutilizables
- **[Búsqueda Avanzada](docs/guias/busqueda.md)** - Encontrar puzzles con filtros
- **[Preguntas Frecuentes](docs/guias/faq.md)** - Respuestas a dudas comunes

### 🚀 Flujos de Trabajo (Procesos completos)
Guías para tareas específicas:

- **[Flujo Completo](docs/flujos/flujo-completo.md)** - De cero a puzzle publicado (70 minutos)
- **[Gestión de Puzzles](docs/flujos/puzzles.md)** - Crear, editar, compartir, eliminar
- **[Gestión de Piezas](docs/flujos/piezas.md)** - Crear y organizar componentes
- **[Gestión de Catálogos](docs/flujos/catalogos.md)** - Estrategia avanzada de catálogos

### 🔧 Referencias Técnicas (Para desarrolladores)
Información técnica del proyecto:

- **[Estructura del Proyecto](docs/referencias/estructura.md)** - Carpetas, archivos, mappeo a UI
- **[Componentes Principales](docs/referencias/componentes.md)** - Descripción de componentes
- **[Instalación y Configuración](docs/referencias/instalacion.md)** - Configurar entorno

## 🎯 Empezar Rápido

### Soy usuario nuevo
1. Lee [Introducción](docs/guias/introduccion.md)
2. Sigue [Autenticación](docs/guias/autenticacion.md)
3. Explora [Panel de Control](docs/guias/panel-control.md)

### Quiero crear un puzzle
1. Asegúrate de estar autenticado
2. Sigue [Crear Puzzle](docs/guias/crear-puzzle.md)
3. Consulta [Flujo Completo](docs/flujos/flujo-completo.md)

### Soy desarrollador
1. Lee [Instalación y Configuración](docs/referencias/instalacion.md)
2. Estudia [Estructura del Proyecto](docs/referencias/estructura.md)
3. Revisa [Componentes Principales](docs/referencias/componentes.md)

## 📂 Estructura de la Documentación

```
docs/
├── index.md                    # Página principal (este archivo)
├── guias/                      # Guías de usuario
│   ├── introduccion.md
│   ├── autenticacion.md
│   ├── panel-control.md
│   ├── crear-puzzle.md
│   ├── catalogos.md
│   ├── busqueda.md
│   └── faq.md
├── flujos/                     # Flujos de trabajo
│   ├── flujo-completo.md
│   ├── puzzles.md
│   ├── piezas.md
│   └── catalogos.md
└── referencias/                # Documentación técnica
    ├── estructura.md
    ├── componentes.md
    └── instalacion.md
```

## 🔍 Buscar por Tema

### Autenticación
- [¿Cómo creo una cuenta?](docs/guias/autenticacion.md#crear-una-cuenta)
- [¿Olvidé mi contraseña?](docs/guias/autenticacion.md#recuperar-contraseña)
- [¿Cómo inicio sesión?](docs/guias/autenticacion.md#iniciar-sesión)

### Puzzles
- [Crear mi primer puzzle](docs/guias/crear-puzzle.md)
- [Editar un puzzle](docs/flujos/puzzles.md#editar-un-puzzle)
- [Compartir un puzzle](docs/flujos/puzzles.md#compartir-puzzles)
- [Eliminar un puzzle](docs/flujos/puzzles.md#eliminar-puzzles)

### Catálogos
- [Crear catálogo](docs/guias/catalogos.md#crear-un-nuevo-catálogo)
- [Usar catálogos en puzzles](docs/flujos/catalogos.md#usar-catálogos-en-puzzles)
- [Compartir catálogos](docs/guias/catalogos.md#compartir-catálogos)

### Búsqueda
- [Búsqueda rápida](docs/guias/busqueda.md#búsqueda-rápida)
- [Búsqueda avanzada](docs/guias/busqueda.md#búsqueda-avanzada-completa)
- [Guardar búsquedas](docs/guias/busqueda.md#guardar-búsquedas)

### Desarrollo
- [Instalar Front-nez](docs/referencias/instalacion.md)
- [Estructura de carpetas](docs/referencias/estructura.md)
- [Componentes disponibles](docs/referencias/componentes.md)

## ✨ Características Principales

- **🔐 Autenticación Segura** - Registro y login con recuperación de contraseña
- **📊 Dashboard Intuitivo** - Acceso rápido a todas las funciones
- **🧩 Constructor Visual** - Interfaz drag & drop para crear puzzles
- **📦 Catálogos Reutilizables** - Organiza y reutiliza componentes
- **🔍 Búsqueda Potente** - Encuentra puzzles con filtros avanzados
- **👥 Compartir** - Colabora con otros usuarios
- **📱 Responsive** - Funciona en desktop (tablet con limitaciones)

## 🆘 Ayuda y Soporte

### Preguntas Frecuentes
Consulta [Preguntas Frecuentes](docs/guias/faq.md) para respuestas rápidas.

### Buscar en la Documentación
Use `Ctrl + F` para buscar en esta página o navegue por las secciones.

### Reportar un Problema
Si encuentras un problema:
1. Consulta [FAQ](docs/guias/faq.md)
2. Revisa la guía relevante
3. Contacta al soporte de la aplicación

### Sugerencias y Feedback
Tus comentarios nos ayudan a mejorar. Contacta al equipo si:
- Encontraste contenido incorrecto
- Te falta información
- Tienes sugerencias

## 🌐 Ver Documentación en Línea

Para una mejor experiencia, sirve la documentación localmente:

```bash
# Instalar MkDocs (si no lo tienes)
pip install mkdocs mkdocs-material

# Servir documentación
mkdocs serve

# Abre en tu navegador
# http://localhost:8000
```

## 📝 Información del Proyecto

- **Nombre:** Front-nez
- **Versión:** 0.1.0
- **Tipo:** Aplicación web educativa
- **Tecnología:** Next.js, React, Tailwind CSS
- **Documentación:** MkDocs con Material
- **Última actualización:** Noviembre 2025

## 📋 Requisitos

Para usar Front-nez necesitas:
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet
- Cuenta de usuario creada

Para desarrollar:
- Node.js 18.17+
- npm o yarn
- Editor de código (VS Code recomendado)
- Git

## 🚀 Empezar Ahora

1. **Lee** la [Introducción](docs/guias/introduccion.md)
2. **Crea** tu cuenta en [Autenticación](docs/guias/autenticacion.md)
3. **Explora** el [Panel de Control](docs/guias/panel-control.md)
4. **Crea** tu primer puzzle en [Crear Puzzle](docs/guias/crear-puzzle.md)

---

## 📚 Índice Completo

### Guías
- [Introducción](docs/guias/introduccion.md)
- [Autenticación e Inicio de Sesión](docs/guias/autenticacion.md)
- [Panel de Control (Dashboard)](docs/guias/panel-control.md)
- [Crear Puzzle - Guía Completa](docs/guias/crear-puzzle.md)
- [Catálogos - Guía Completa](docs/guias/catalogos.md)
- [Búsqueda Avanzada](docs/guias/busqueda.md)
- [Preguntas Frecuentes (FAQ)](docs/guias/faq.md)

### Flujos de Trabajo
- [Flujo Completo: De Cero a Puzzle Publicado](docs/flujos/flujo-completo.md)
- [Gestión de Puzzles](docs/flujos/puzzles.md)
- [Gestión de Piezas](docs/flujos/piezas.md)
- [Gestión de Catálogos - Flujo Avanzado](docs/flujos/catalogos.md)

### Referencias Técnicas
- [Estructura del Proyecto](docs/referencias/estructura.md)
- [Componentes Principales](docs/referencias/componentes.md)
- [Instalación y Configuración](docs/referencias/instalacion.md)

---

**¿Necesitas ayuda?** Consulta [Preguntas Frecuentes](docs/guias/faq.md) o contacta al soporte.

**¿Encontraste un error en la documentación?** Repórtalo para que lo arreglemos.

¡Bienvenido a Front-nez! 🎉
