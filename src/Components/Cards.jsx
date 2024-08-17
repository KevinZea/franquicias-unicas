import React from "react";
import {
    Box,
    Heading,
    Text,
    Flex,
} from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
import { IoMdResize } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Cards = () => {
    const amarillo = "#ffc300"
    const blanco = "#faf4e0"

    const information = [
        {
            title: "Información",
            description: "Su ubicación, el hermoso paisaje de las zonas rurales, el desarrollo y cercanía a la ciudad de Bogotá, hacen del lugar ideal para invertir, muy cerca a la localidad de Ciudad Bolivar un lugar para el turismo y el descanso.",
            fondo: "white",
            logo: <FaInfo />,
            color: "black"
        },
        {
            title: "Tamaño",
            description: "390.000 m2\nLotes desde 240 m2",
            fondo: "#fcc435",
            logo: <IoMdResize />,
            color: blanco
        },
        {
            title: "Inversión",
            description: "El valor de nuestros lotes varía de acuerdo al proyecto, su tamaño, ubicación, cercanía a la ciudad, etapa constructiva y tipo de negociación.",
            fondo: "#3b0c2c",
            logo: <FaMoneyBillTrendUp />,
            color: blanco
        },
        {
            title: "Ubicación",
            description: "Bogotá. A kms del Mirador sobre la carretera Bogotá - La Mesa. A 45 minutos de Bogotá.",
            fondo: "#d2ff1f",
            logo: <FaLocationDot />,
            color: "black"
        },
    ]

    return (
        <Flex
            w={"100%"}
            h={"auto"}
            bg={blanco}
            p={10}
            gap={5}
            justifyContent={"center"}
        >
            {information.map((card) => (
                <Box
                    bg={card.fondo}
                    p={5}
                    w={"20%"}
                    color={card.color}
                >
                    <Box
                    display={"flex"}
                    justifyContent={"end"}
                    alignItems={"center"}
                    w={"100%"}

                    >

                        <Box
                            bg={"#ff6a00"}
                            color={"white"}
                            transform={"rotate(45deg)"}
                            w={10}
                            h={10}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Text
                                transform={"rotate(-45deg)"}
                            >
                                {card.logo}
                            </Text>
                        </Box>
                    </Box>
                    <Heading>
                        {card.title}
                    </Heading>
                    <br />
                    <Text
                    whiteSpace={"pre-wrap"}
                    >
                        {card.description}
                    </Text>
                </Box>
            ))}

        </Flex>
    );
}

export default Cards;