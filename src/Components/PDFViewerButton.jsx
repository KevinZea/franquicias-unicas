import { Button } from '@chakra-ui/react'
import { FaFilePdf } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const PDFViewerButton = ({ pdfURL, buttonText = 'Ver PDF' }) => {


  const handleClick = () => {
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