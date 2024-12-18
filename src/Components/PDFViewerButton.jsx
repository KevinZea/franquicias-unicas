import { Button } from '@chakra-ui/react'
import { FaFilePdf } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const PDFViewerButton = ({ pdfURL, buttonText = 'Ver PDF' }) => {
  const [fullPdfPath, setFullPdfPath] = useState('')

  useEffect(() => {
    // Construye la ruta completa del PDF
    // const baseUrl = import.meta.env.VITE_BASE_URL || ''
    const baseUrl = "https://franquiciasunicas.com"
    const normalizedPdfUrl = pdfURL.startsWith('/') ? pdfURL : `/${pdfURL}`
    setFullPdfPath(`${baseUrl}${normalizedPdfUrl}`)
  }, [pdfURL])

  const handleClick = () => {
    if (!fullPdfPath) return

    // Verifica si el PDF existe antes de abrirlo
    fetch(fullPdfPath)
      .then(response => {
        if (response.ok) {
          window.open(fullPdfPath, '_blank')
        } else {
          console.error('El PDF no se encontró')
          alert('Lo sentimos, el documento no está disponible en este momento.')
        }
      })
      .catch(error => {
        console.error('Error al acceder al PDF:', error)
        alert('Ocurrió un error al intentar abrir el documento.')
      })
  }

  return (
    <Button
      leftIcon={<FaFilePdf />}
      colorScheme="red"
      onClick={handleClick}
      _hover={{ transform: 'scale(1.05)' }}
      transition="all 0.2s"
      isDisabled={!fullPdfPath}
    >
      {buttonText}
    </Button>
  )
}

export default PDFViewerButton