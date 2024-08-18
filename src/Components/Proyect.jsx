import React from 'react';
import {
    Box,
    Divider,
    Flex,
    Heading,
    Text,
    Image
} from '@chakra-ui/react';
import paraiso from '../assets/paraiso.jpeg';

const Proyect = ({isMobile}) => {
    const blanco = "#faf4e0"
    const naranja = "#ff6a00"
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
                            Descripción del proyecto
                        </Heading>
                    </Flex>
                    <Heading color={naranja}>
                        Poblado Paraiso Mirador & Quiba
                    </Heading>
                    <br />
                    <Text color={morado}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas aspernatur non asperiores, architecto voluptatibus accusamus molestias nihil,
                        amet totam ratione cupiditate iure alias cumque nesciunt. Tenetur natus sunt rem hic.
                    </Text>
                    <br />
                    <Text color={morado}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas aspernatur non asperiores, architecto voluptatibus accusamus molestias nihil,
                        amet totam ratione cupiditate iure alias cumque nesciunt. Tenetur natus sunt rem hic.
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