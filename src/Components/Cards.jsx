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
import PDFViewerButton from "./PDFViewerButton";


const Cards = ({ isMobile }) => {
    const amarillo = "#ffc300"
    const blanco = "#a4dcb9"

    const information = [
        {
            title: "Precontrato",
            description: "Se parte de nuestra franquicia y convierte en mayorista en todo latinoamérica. \n",
            fondo: "white",
            logo: <FaInfo />,
            color: "black",
            link: "https://drive.google.com/file/d/1l2XIaIOQH17aV3gtXdV3Lgknp5GMnRJF/view?usp=sharing"
        },
        {
            title: "Mercados",
            description: "Conviértete en dueño de tu propio negocio y administra tus propios horarios. \n",
            fondo: "#2e97b7",
            logo: <IoMdResize />,
            color: blanco,
            link: "https://drive.google.com/file/d/1QRK5a7-e1qBzbK2nFP6m6R2g-jNrnldd/view?usp=sharing"
        },
        {
            title: "Promociones",
            description: "Mira nuestras nuevas promociones de productos",
            fondo: "#32b9be",
            logo: <FaMoneyBillTrendUp />,
            color: blanco,
            link: "https://drive.google.com/file/d/1EqDBcfBmzMsY0L07ZlbL5TiG33wRDEGF/view?usp=sharing"
        },
        {
            title: "Ubicación",
            description: "Bogotá. Parque Empresarial Mosquera II Km18 vía Soacha Mz05 Und074",
            fondo: "#5bcebf",
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
            flexDir={isMobile ? "column" : "row"}

        >
            {information.map((card) => (
                <Box
                    bg={card.fondo}
                    p={5}
                    w={isMobile ? "100%%" : "20%"}
                    color={card.color}
                    mt={40}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"end"}
                        alignItems={"center"}
                        w={"100%"}

                    >

                        <Box
                            bg={"#fdf4b0"}
                            color={"#2e97b7"}
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
                        mb={5}
                    >
                        {card.description}
                    </Text>
                    {card.title === "Precontrato" && (
                        <PDFViewerButton
                            pdfURL={card.link}
                            buttonText={"Ver más"}
                        />
                    )}
                    {card.title === "Mercados" && (
                        <PDFViewerButton
                            pdfURL={card.link}
                            buttonText={"Ver más"}
                        />
                    )}
                    {card.title === "Promociones" && (
                        <PDFViewerButton
                            pdfURL={card.link}
                            buttonText={"Ver más"}
                        />
                    )}
                </Box>
            ))}

        </Flex>
    );
}

export default Cards;