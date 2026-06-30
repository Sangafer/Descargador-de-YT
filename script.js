const urlInput= document.getElementById("media-url")
const analizarEnlace=document.getElementById("analyze-btn")
const iniciarConversion=document.getElementById("start-download-btn")
const configSection=document.getElementById("config-section")
const progressSection=document.getElementById("progress-section")
const currentProgress=document.getElementById("current-progress")

analizarEnlace.addEventListener("click", async(event)=>{
    if(urlInput.value===""){
        alert("El campo de la URL esta vacio")
        return
    }

    const response=await fetch ('http://127.0.0.1:5000/analizar',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({url:urlInput.value})
    });

    const data=await response.json()

    document.getElementById("video-title").textContent=data.titulo
    document.getElementById("video-duration").textContent=data.duracion
    configSection.classList.remove('hidden')

    const imgElement=document.getElementById('video-miniature')
    imgElement.src=data.thumbnail;

    

    document.getElementById('video-miniature')
})

iniciarConversion.addEventListener("click", async () => {
    configSection.classList.add("hidden");
    progressSection.classList.remove("hidden");
    document.getElementById("status-text").textContent = "Descargando...";
    
    const formato = document.getElementById("format-type").value;
    
    const response = await fetch('http://127.0.0.1:5000/descargar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ url: urlInput.value, formato: formato })
    });

    if (response.ok) {
        // Esto transforma la respuesta del servidor en un objeto descargable
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.style.display = 'none';
        a.href = url;
        // Asignamos un nombre genérico o podrías pedirle el nombre al servidor
        a.download = 'video_descargado.mp4'; 
        document.body.appendChild(a);
        a.click(); // Esto dispara la descarga en tu navegador
        
        window.URL.revokeObjectURL(url);
        document.getElementById("status-text").textContent = "¡Descarga finalizada!";
    } else {
        document.getElementById("status-text").textContent = "Error en la descarga.";
    }
});