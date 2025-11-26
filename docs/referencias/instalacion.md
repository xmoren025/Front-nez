# Instalación y Configuración

Guía para configurar el entorno de desarrollo de Front-nez.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.17 o superior)
- **npm** o **yarn** (administrador de paquetes)
- **Git** (para clonar el repositorio)
- Un editor de código (VS Code recomendado)
- **Git Bash** (en Windows) o terminal compatible

### Verificar Instalación

```bash
node --version          # Debe ser >= 18.17
npm --version           # Debe estar actualizado
git --version           # Debe estar instalado
```

## Obtener el Código

### Opción 1: Clonar desde GitHub

```bash
# Navega a tu carpeta deseada
cd Documents/GitHub

# Clona el repositorio
git clone https://github.com/xmoren025/Front-nez.git

# Entra a la carpeta
cd Front-nez
```

### Opción 2: Descargar ZIP

1. Ve a GitHub: https://github.com/xmoren025/Front-nez
2. Haz clic en "Code" → "Download ZIP"
3. Extrae el archivo
4. Abre terminal en esa carpeta

## Instalación de Dependencias

### Opción 1: Con npm

```bash
# Instala todas las dependencias
npm install

# Verifica que se instalaron correctamente
npm list
```

### Opción 2: Con yarn

```bash
yarn install
yarn list
```

### Qué se instala:

Del archivo `package.json`:

```json
{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@hello-pangea/dnd": "^18.0.1",
    "@mui/icons-material": "^7.3.4",
    "@mui/lab": "^7.0.1-beta.18",
    "next": "15.5.5",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.5.5",
    "tailwindcss": "^4"
  }
}
```

## Configurar Variables de Entorno

### Crear archivo `.env.local`

En la raíz del proyecto, crea un archivo `.env.local`:

```bash
# En la carpeta raíz
touch .env.local
```

### Variables de Entorno Necesarias

Agrega al archivo `.env.local`:

```env
# API Backend
NEXT_PUBLIC_API_URL=http://localhost:3001

# Autenticación (si aplica)
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain.com

# Configuración de aplicación
NEXT_PUBLIC_APP_NAME=Front-nez
NEXT_PUBLIC_VERSION=0.1.0

# Modo debug (desarrollo)
DEBUG=true
```

**Nota:** Las variables con `NEXT_PUBLIC_` están disponibles en el cliente.

## Ejecutar en Desarrollo

### Iniciar servidor de desarrollo

```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con turbopack (más rápido)
npm run dev --turbopack
```

### Acceder a la aplicación

Abre tu navegador:
```
http://localhost:3000
```

Deberías ver la página de inicio de Front-nez.

### Características del servidor de desarrollo

- 🔄 **Hot reload** - Los cambios se actualizan automáticamente
- 🐛 **Error overlay** - Errores se muestran en el navegador
- 📊 **Performance** - Indicadores de rendimiento

## Compilar para Producción

### Crear build de producción

```bash
npm run build

# Verifica que se compiló sin errores
echo "Build completado"
```

### Archivos generados

La carpeta `.next/` contiene:
- Código compilado y optimizado
- Assets estáticos
- Manifiestos de servicio

### Iniciar en modo producción

```bash
npm run start
```

Accede en: `http://localhost:3000`

## Documentación con MkDocs

### Instalar MkDocs

```bash
# Con pip (Python)
pip install mkdocs mkdocs-material

# Verificar instalación
mkdocs --version
```

### Servir documentación localmente

```bash
# Desde la raíz del proyecto
mkdocs serve

# La documentación estará en:
# http://localhost:8000
```

### Compilar documentación

```bash
# Generar HTML estático
mkdocs build

# Archivos se crean en carpeta "site/"
```

### Editar documentación

- Los archivos están en `docs/`
- Actualizar `.md` y la documentación se refresca automáticamente
- Ver cambios en http://localhost:8000

## Linting y Validación

### Ejecutar ESLint

```bash
npm run lint

# Valida el código contra reglas de estilo
```

### Archivos a validar

Configurado en `eslint.config.mjs`:
- Archivos `.js` y `.jsx`
- Verificación de Next.js
- Reglas de React

## Docker (Opcional)

Si quieres usar Docker:

### Build de imagen Docker

```bash
docker build -t front-nez:latest .
```

### Ejecutar contenedor

```bash
docker run -p 3000:3000 front-nez:latest
```

### Con Docker Compose

```bash
docker-compose up

# Para detener
docker-compose down
```

## Estructura de Carpetas Importante

```
Front-nez/
├── .next/               # Build de Next.js (generado)
├── src/
│   ├── app/            # Páginas y rutas
│   ├── components/     # Componentes reutilizables
│   ├── services/       # Llamadas a API
│   ├── styles/         # Estilos globales
│   └── utils/          # Funciones auxiliares
├── public/             # Archivos estáticos
├── docs/               # Documentación (esta)
├── .env.local          # Variables de entorno (crear)
├── .env.example        # Template de env variables
├── next.config.mjs     # Configuración Next.js
├── tailwind.config.js  # Configuración Tailwind
├── mkdocs.yml          # Configuración documentación
└── package.json        # Dependencias
```

## Solucionar Problemas

### "npm install falla"

```bash
# Limpiar caché npm
npm cache clean --force

# Eliminar node_modules y package-lock
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### "Puerto 3000 está en uso"

```bash
# Especificar puerto diferente
npm run dev -- -p 3001

# En Windows, terminar proceso
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

### "Errores de dependencias"

```bash
# Actualizar dependencias
npm update

# Ver dependencias desactualizadas
npm outdated
```

### "Problemas con Tailwind CSS"

```bash
# Reconstruir Tailwind
npm run build

# Limpiar caché Tailwind
rm -rf .next

# Reinstalar
npm install
npm run dev
```

### "Errores de ESLint"

```bash
# Ver errores específicos
npm run lint -- --format=detailed

# Reparar automáticamente
npm run lint -- --fix
```

### "MkDocs no funciona"

```bash
# Reinstalar MkDocs
pip install --upgrade mkdocs mkdocs-material

# Verificar theme
mkdocs serve --verbose
```

## Scripts Disponibles

En `package.json`:

```bash
npm run dev              # Desarrollo con turbopack
npm run build            # Compilar para producción
npm run start            # Ejecutar servidor producción
npm run lint             # Validar código con ESLint
```

## Recursos Útiles

### Documentación Oficial

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [MkDocs](https://www.mkdocs.org)

### Herramientas Recomendadas

- **VS Code** - Editor de código
- **Prettier** - Formateador de código
- **React DevTools** - Extension para Chrome
- **Redux DevTools** - Estado de la app

### Community

- Documentación: `docs/`
- Issues: GitHub Issues
- Discusiones: GitHub Discussions

## Próximos Pasos

1. ✅ Clona el repositorio
2. ✅ Instala dependencias
3. ✅ Configura variables de entorno
4. ✅ Ejecuta `npm run dev`
5. ✅ Abre http://localhost:3000
6. ✅ ¡Comienza a desarrollar!

## Ayuda Adicional

Si encuentras problemas:

1. **Revisa los logs** - Información de errores
2. **Consulta la documentación** - En `docs/`
3. **Busca en Google** - Errores comunes
4. **Contacta soporte** - Para problemas específicos

---

¡Listo! El proyecto está configurado y funcionando. 🚀
