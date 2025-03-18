import React from 'react';
import { Box, Button, Container, Heading, SimpleGrid, useColorModeValue, Text, Icon, Flex } from '@chakra-ui/react';
import { FaFileAlt, FaChartLine, FaBoxOpen, FaTags, FaMedkit } from 'react-icons/fa';
import { motion } from 'framer-motion';

// URLs de los documentos (Reemplaza estas URLs con las reales de tus documentos en Drive)
const documentos = [
    {
        id: 1,
        nombre: 'FRANQUICIA REGIONAL',
        url: 'https://drive.google.com/file/d/1GuoI1ufelgzXebT4IdW4-2EK3KEiEU4t/view?usp=sharing',
        icono: FaFileAlt,
        descripcion: 'Información sobre franquicias regionales'
    },
    {
        id: 2,
        nombre: 'MERCADOS',
        url: 'https://drive.google.com/file/d/1QRK5a7-e1qBzbK2nFP6m6R2g-jNrnldd/view?usp=sharing',
        icono: FaChartLine,
        descripcion: 'Análisis de mercados actuales'
    },
    {
        id: 3,
        nombre: 'PROMOCIONES LISTADO DE INSUMOS',
        url: 'https://drive.google.com/file/d/1EqDBcfBmzMsY0L07ZlbL5TiG33wRDEGF/view?usp=sharing',
        icono: FaTags,
        descripcion: 'Catálogo de promociones disponibles'
    },
    {
        id: 4,
        nombre: 'INSUMOS ANTICANCER POSTGERSON',
        url: 'https://drive.google.com/file/d/1qqPDQdSo96dwcAbeg9K2DiNvM-GXYL0h/view?usp=sharing',
        icono: FaMedkit,
        descripcion: 'Información sobre insumos anticáncer'
    }
];

// Componente para cada botón
const DocumentButton = ({ documento }) => {
    const MotionButton = motion(Button);

    return (
        <MotionButton
            as="a"
            href={documento.url}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            height="100px"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            borderRadius="lg"
            boxShadow="md"
            bg={useColorModeValue('teal.100', 'teal.700')}
            _hover={{
                bg: useColorModeValue('teal.200', 'teal.600'),
                boxShadow: 'lg'
            }}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={4}
        >
            <Icon as={documento.icono} boxSize={8} mb={2} color={useColorModeValue('blue.500', 'blue.300')} />
            <Text fontWeight="bold" textAlign="center" fontSize={['sm', 'sm']} lineHeight="short">
                {documento.nombre}
            </Text>
            <Text fontSize="xs" textAlign="center" mt={1} color={useColorModeValue('gray.600', 'gray.300')}>
                {documento.descripcion}
            </Text>
        </MotionButton>
    );
};

// Componente principal
const DocumentosButtons = () => {
    return (
        <Box
            py={12}
            bg={useColorModeValue('blue.50', 'gray.800')}
            minH="10vh"
        >
            <Container maxW="container.xl" >
                <Flex
                    // w={1400}
                    direction="column"
                    align="center"
                    bg={useColorModeValue('white', 'gray.700')}
                    p={8}
                    borderRadius="xl"
                    boxShadow="xl"
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        height="10px"
                        bgGradient="linear(to-r, teal.300, blue.300)"
                    />

                    <Heading
                        as="h1"
                        size="xl"
                        mb={8}
                        textAlign="center"
                        color={useColorModeValue('gray.700', 'white')}
                    >
                        Documentos Importantes
                    </Heading>

                    <SimpleGrid
                        columns={{ base: 1, sm: 2, lg: 4 }}
                        spacing={6}
                        width="100%"
                    >
                        {documentos.map((doc) => (
                            <DocumentButton key={doc.id} documento={doc} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </Container>
        </Box>
    );
};

export default DocumentosButtons;