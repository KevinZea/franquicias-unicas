import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Heading,
    Image
} from '@chakra-ui/react';
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { PiWarehouseBold } from "react-icons/pi";
import { PiPottedPlantFill } from "react-icons/pi";

const Icons = ({ isMobile }) => {
    const blanco = "#fdf4b0"
    const naranja = "#ff6a00"
    const morado = "#3b0c2c"

    return (
        <Flex
            w={"100%"}
            h={"auto"}
            bg={blanco}
            gap={isMobile ? 15 : 20}
            alignItems={"center"}
            justifyContent={"center"}
            p={5}
        >
            <Box
                w={isMobile ? "33%" : "7%"}
            >
                <Box
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"full"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"5px solid #ff6a00"}
                    p={isMobile ? 0 : 1}
                    pt={isMobile ? 6 : 0}
                    pb={isMobile ? 6 : 0}
                >
                    <MdOutlineFamilyRestroom size={isMobile ? 50 : 90} color={naranja} />
                </Box>
                <Heading
                    color={naranja}
                    size={isMobile ? "xs" : "md"}
                    textAlign={"center"}

                >
                    Conoce nuevos socios
                </Heading>
            </Box>

            <Box
                w={isMobile ? "33%" : "7%"}

            >
                <Box
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"full"}
                    p={isMobile ? 0 : 1}
                    pt={isMobile ? 6 : 0}
                    pb={isMobile ? 6 : 0}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"5px solid #ff6a00"}
                >
                    <PiWarehouseBold size={isMobile ? 50 : 90} color={naranja} />
                </Box>
                <Heading
                    color={naranja}
                    size={isMobile ? "xs" : "md"}
                    textAlign={"center"}
                >
                    Obten tu propio negocio
                </Heading>
            </Box>

            <Box
                w={isMobile ? "33%" : "7%"}
            >
                <Box
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"full"}
                    p={isMobile ? 0 : 1}
                    pt={isMobile ? 6 : 0}
                    pb={isMobile ? 6 : 0}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"5px solid #ff6a00"}
                >
                    <PiPottedPlantFill size={isMobile ? 50 : 90} color={naranja} />
                </Box>
                <Heading
                    color={naranja}
                    size={isMobile ? "xs" : "md"}
                    textAlign={"center"}

                >
                    Trabaja desde donde quieras
                </Heading>
            </Box>
        </Flex>
    );
}

export default Icons;