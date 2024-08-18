import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Heading,
    Image
} from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Navbar = ({ refs, isMobile }) => {

    const amarillo = "#ffc300"
    const blanco = "#faf4e0"

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };

    const refsArray = [refs.aboutUs, refs.cards, refs.galeria, refs.ubicacion];

    return (
        <Flex w={isMobile ? "100%" : "100%"} h={100} bg={amarillo} p={2} alignItems={"center"} gap={isMobile ? 3 : 10} position={"fixed"} zIndex={1}>
            <Box w={isMobile ? "10%" : "40%"}>
                <Image
                    src={logo}
                    w={isMobile ? 50 : 70}
                />
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
                onClick={() => scrollToSection(refsArray[1])}
            >
                <Heading color={blanco} size={isMobile ? "xs" : "md"}>Inicio</Heading>
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
            >
                <Heading color={blanco} size={isMobile ? "xs" : "md"} onClick={() => scrollToSection(refsArray[0])} >Sobre Nosotros</Heading>
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
                onClick={() => scrollToSection(refsArray[2])}
            >
                <Heading color={blanco} size={isMobile ? "xs" : "md"}>Lotes</Heading>
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
                onClick={() => scrollToSection(refsArray[3])}
            >
                <Heading color={blanco} size={isMobile ? "xs" : "md"}>Ubicación</Heading>
            </Box>
        </Flex>
    );
}

export default Navbar;