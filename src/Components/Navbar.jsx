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

const Navbar = ({ refs }) => {

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
        <Flex w={"100%"} h={100} bg={amarillo} p={2} alignItems={"center"} gap={10} position={"fixed"} zIndex={2}>
            <Box w={"40%"}>
                <Image
                    src={logo}
                    w={70}
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
                <Heading color={blanco} size={"md"}>Inicio</Heading>
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
            >
                <Heading color={blanco} size={"md"} onClick={() => scrollToSection(refsArray[0])} >Sobre Nosotros</Heading>
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
                onClick={() => scrollToSection(refsArray[2])}
            >
                <Heading color={blanco} size={"md"}>Lotes</Heading>
            </Box>
            <Box
                _hover={
                    {
                        cursor: "pointer"
                    }
                }
                onClick={() => scrollToSection(refsArray[3])}
            >
                <Heading color={blanco} size={"md"}>Ubicación</Heading>
            </Box>
        </Flex>
    );
}

export default Navbar;