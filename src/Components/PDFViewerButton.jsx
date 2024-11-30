import { Button } from '@chakra-ui/react'
import { FaFilePdf } from 'react-icons/fa'

const PDFViewerButton = ({ pdfURL, buttonText = 'Ver PDF' }) => {
  const handleClick = () => {
    // Abre el PDF en una nueva ventana
    window.open(pdfURL, '_blank')
  }

  return (
    <Button
      leftIcon={<FaFilePdf />}
      colorScheme="red"
      onClick={handleClick}
      _hover={{ transform: 'scale(1.05)' }}
      transition="all 0.2s"
    >
      {buttonText}
    </Button>
  )
}

export default PDFViewerButton
