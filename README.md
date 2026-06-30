## Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Fetch API).
- **Backend:** Python con Flask.
- **Motor de descarga:** [yt-dlp](https://github.com/yt-dlp/yt-dlp).
- **Procesamiento de video:** FFmpeg.

## Características

- **Análisis instantáneo:** Obtén título, duración y miniatura del video antes de descargar.
- **Formatos flexibles:** Descarga en formato Video (MP4) o Audio (MP3).
- **Interfaz moderna:** Diseño limpio y responsivo.

## Cómo empezar (Instalación)

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/SwiftConvert.git](https://github.com/tu-usuario/SwiftConvert.git)
   cd SwiftConvert
2. **Crea un entorno virtual e instala dependencias**
    ```python 
    python -m venv venv
    # En Windows:
    venv\Scripts\activate
    # Instala las librerías necesarias:
    pip install flask flask-cors yt-dlp
  - Asegurate de tener instalado FFmpeg en tu sistema
  - Instala **Node.js** para asegurar la compatibilidad con el motor de JavaScript de YouTube.

3. Ejecuta la aplicacion
   ```python
   python app.py
4. Accede a la web
Inicia el **index.html** en un editor de codigo compatible o abre Live Server en VScode

## Contribuciones
Este proyecto es opensource y las contribuciones son bienvenidas, si ves algun error o se te ocurre alguna mejora
sientete libre de hacer un fork al repositorio y envar un **pull request**
