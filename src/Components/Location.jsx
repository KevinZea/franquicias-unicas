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
            bg={"#faf4e0"}
        >
            <Flex
                w={"100%"}
                h={"auto"}
                bg={"#faf4e0"}
                p={10}
                gap={5}
                justifyContent={"center"}
                flexDir={isMobile ? "column" : "row"}
            >
                <Box
                    bg={"#3b0c2c"}
                    p={5}
                    w={isMobile ? "100%" : "40%"}
                    color={"white"}
                >
                    <Heading>
                        Ubicación
                    </Heading>
                    <br />
                    <Text>
                        Nuestro proyecto se encuentra ubicado en la via a Quiba, a 10 minutos del barrio Paraiso Mirador.
                    </Text>
                    <br />
                    <Text>
                        La ubicación de nuestro proyecto es ideal para quienes buscan un lugar tranquilo y seguro para vivir, pero que a la vez esté cerca de la ciudad.
                    </Text>
                </Box>
                <Box
                    // bg={"#3b0c2c"}
                    // p={5}
                    w={isMobile ? "100%" : "40%"}
                    color={"white"}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.2216007507427!2d-74.16286128983124!3d4.55411644289257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f7cf5234527%3A0x4c91b969882c2e6!2sParaiso%20Mirador!5e0!3m2!1ses-419!2sco!4v1723914829225!5m2!1ses-419!2sco" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Flex>
        </Box>
    );
}

export default Location;