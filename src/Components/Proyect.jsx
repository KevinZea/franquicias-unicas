import React from 'react';
import {
    Box,
    Divider,
    Flex,
    Heading,
    Text,
    Image
} from '@chakra-ui/react';
import paraiso from '../assets/paraiso.jpg';

const Proyect = ({ isMobile }) => {
    const blanco = "#a4dcb9"
    const naranja = "#2e97b7"
    const morado = "#3b0c2c"
    return (
        <Box
            w={"100%"}
            h={"auto"}
            bg={blanco}
            p={5}
        >
            <Flex
                w={"100%"}
                h={"auto"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Divider borderColor={morado} w={"90%"} />

            </Flex>
            <br />
            <Flex
                w={"100%"}
                h={"auto"}
                pl={isMobile ? 5 : 20}
                pr={isMobile ? 5 : 20}
                flexDir={isMobile ? "column" : "row"}
            >
                <Box w={isMobile ? "100%" : "50%"}>
                    <Flex gap={3} alignItems={"center"} w={"100%"}>
                        <Divider borderColor={"#ff6a00"} w={"10%"} />
                        <Heading size={"md"} color={naranja}>
                            Descripción de las Franquicias
                        </Heading>
                    </Flex>
                    <Heading color={naranja}>
                        Convierte en Mayorista a nivel nacional e internacional
                    </Heading>
                    <br />
                    <Text color={morado}>
                        Nuestra franquicia ofrece una oportunidad única para convertirse en mayorista de productos de alta calidad. Con una red de distribución sólida y un modelo de negocio probado, nuestros franquiciados pueden expandir su alcance tanto a nivel nacional como internacional. Ofrecemos soporte continuo y recursos para asegurar el éxito de cada franquicia.
                    </Text>
                    <br />
                    <Text color={morado}>
                        <b>Beneficios:</b>

                        <br />
                        - Soporte continuo
                        <br />
                        - Modelo de negocio probado
                        <br />
                        - Red de distribución sólida
                        <br />
                        - Oportunidades de expansión
                        <br />
                        - Productos de alta calidad
                        

                    </Text>
                </Box>
                {isMobile && <br />}
                <Box
                    w={isMobile ? "100%" : "50%"}
                    ml={isMobile ? 0 : 5}
                >
                    <Image
                        src={paraiso}
                        alt={"Poblado Paraiso Mirador Club & Quiba"}
                        w={"100%"}
                        h={"auto"}
                    />
                </Box>
            </Flex>
        </Box>
    );
}

export default Proyect;