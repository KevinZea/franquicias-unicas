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

const Icons = () => {
    const blanco = "#faf4e0"
    const naranja = "#ff6a00"
    const morado = "#3b0c2c"

    return (
        <Flex
            w={"100%"}
            h={"auto"}
            bg={blanco}
            gap={20}
            alignItems={"center"}
            justifyContent={"center"}
            p={5}
        >
            <Box
                w={"7%"}
            >
                <Box
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"full"}
                    p={1}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"5px solid #ff6a00"}
                >
                    <MdOutlineFamilyRestroom size={90} color={naranja} />
                </Box>
                <Heading
                    color={naranja}
                    size={"md"}
                    textAlign={"center"}

                >
                    Comparte en familia
                </Heading>
            </Box>

            <Box
                w={"7%"}
            >
                <Box
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"full"}
                    p={1}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"5px solid #ff6a00"}
                >
                    <PiWarehouseBold size={90} color={naranja} />
                </Box>
                <Heading
                    color={naranja}
                    size={"md"}
                    textAlign={"center"}
                >
                    Obten tu propia vivienda
                </Heading>
            </Box>

            <Box
                w={"7%"}
            >
                <Box
                    w={"100%"}
                    bg={"white"}
                    borderRadius={"full"}
                    p={1}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"5px solid #ff6a00"}
                >
                    <PiPottedPlantFill size={90} color={naranja} />
                </Box>
                <Heading
                    color={naranja}
                    size={"md"}
                    textAlign={"center"}

                >
                    Vive en un lugar seguro
                </Heading>
            </Box>
        </Flex>
    );
}

export default Icons;