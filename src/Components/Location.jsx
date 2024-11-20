import React from 'react';
import {
    Box,
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react';

const Location = ({isMobile}) => {

    return (
        <Box
            w={"100%"}
            h={"auto"}
            bg={"#fdf4b0"}
        >
            <Flex
                w={"100%"}
                h={"auto"}
                bg={"#fdf4b0"}
                p={10}
                gap={5}
                justifyContent={"center"}
                flexDir={isMobile ? "column" : "row"}
            >
                <Box
                    bg={"#2e97b7"}
                    p={5}
                    w={isMobile ? "100%" : "40%"}
                    color={"white"}
                >
                    <Heading>
                        Ubicación
                    </Heading>
                    <br />
                    <Text>
                        Nuestro proyecto se encuentra ubicado en Parque Empresarial Mosquera II Km18 vía Soacha Mz05 Und074
                        Casa-Bodega I, II,III Castilla.
                    </Text>
                    <br />
                    <Text>
                        La ubicación de nuestro proyecto es ideal para el desarrollo de tu negocio.
                    </Text>
                </Box>
                <Box
                    // bg={"#3b0c2c"}
                    // p={5}
                    w={isMobile ? "100%" : "40%"}
                    color={"white"}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.4806907976135!2d-74.14578503918911!3d4.640342331259841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c16de9ded55%3A0x4c7bf2d5d7e26044!2sCastilla%2C%20Ciudad%20Kennedy%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1732078900396!5m2!1ses!2sco" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Flex>
        </Box>
    );
}

export default Location;