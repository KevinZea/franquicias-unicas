import React, { useRef } from "react"
import Navbar from "./Components/Navbar"
import Introduction from "./Components/Introduction"
import Cards from "./Components/Cards"
import Proyect from "./Components/Proyect"
import Gallery from "./Components/Gallery"
import Icons from "./Components/Icons"
import Location from "./Components/Location"
import Footer from "./Components/Footer"

function App() {
  const aboutUs = useRef(null)
  const cards = useRef(null)
  const galeria = useRef(null)
  const ubicacion = useRef(null)

  return (
    <>
      <Navbar refs={{ aboutUs, cards, galeria, ubicacion }} />
      <div ref={cards}><Introduction /></div>
      <div><Cards /></div>
      <div ref={aboutUs}><Proyect /></div>
      <div ref={galeria}><Gallery /></div>
      <Icons />
      <div ref={ubicacion}><Location /></div>
      <Footer />
    </>
  )
}

export default App
