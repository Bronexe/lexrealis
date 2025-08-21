"use client"
import { useEffect } from "react"

export function JotFormScripts() {
  useEffect(() => {
    // Cargar el script de JotForm
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
    script.async = true
    document.head.appendChild(script)

    // Ejecutar el handler cuando el script esté cargado
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-250325680930050']", "https://form.jotform.com/")
      }
    }

    return () => {
      // Limpiar el script cuando el componente se desmonte
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null
}




