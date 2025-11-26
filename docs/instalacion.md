# Instalación y ejecución local

Estos pasos sirven para ver la documentación con `mkdocs` en tu máquina (PowerShell en Windows o la terminal en WSL).

1. Instalar Python (si no está instalado).
2. Crear un entorno virtual (opcional) e instalar `mkdocs` y el tema `material`:

```powershell
python -m venv .venv; .\.venv\Scripts\Activate.ps1
pip install --upgrade pip
pip install mkdocs mkdocs-material
```

3. Servir la documentación localmente:

```powershell
mkdocs serve -a 0.0.0.0:8000
```

Luego abre `http://localhost:8000` en tu navegador.

4. Para generar una versión estática (build):

```powershell
mkdocs build
```

Opcional: hospedar en GitHub Pages o Netlify siguiendo la guía oficial de MkDocs.
