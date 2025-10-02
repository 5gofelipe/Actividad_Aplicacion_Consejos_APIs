async function ObtenerConsejo() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const original = data.slip.advice;
      const traducido = await traducir(original);
      document.getElementById("advice-id").textContent = `Advice #${data.slip.id}`;
      document.getElementById("advice-text").textContent = `"${original}"`;      
      document.getElementById("advice-text-traducido").textContent = `"${traducido}"`;
    } catch (error) {
      console.error("Error al obtener consejo:", error);
      document.getElementById("advice-text").textContent = "Ups... no se pudo cargar un consejo.";
    }
  }
  window.onload = ObtenerConsejo;