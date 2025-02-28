"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import RightArrowIcon from "@/assets/icon/right-arrow.svg";
import Image from "next/image";
import TrhCenterIcon from "@/assets/trh-center.svg";
import { useBreakpoint } from "@/app/hooks/breakpoint";
export default function TitleContainer() {
  const { isMobile, isTablet } = useBreakpoint();
  const imageWidth = isMobile ? 75 : isTablet ? 125 : 200;
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={{ base: "785px", md: "100vh" }}
      position={"relative"}
      className="title-component"
    >
      <Box
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "285px", md: "0" }}
        left={{ base: "50%", md: "0" }}
        transform={{ base: "translate(-50%, 0%)", md: "translate(0%, 0%)" }}
      >
        <Image
          src={TrhCenterIcon}
          alt="trh-center"
          width={imageWidth}
          height={imageWidth}
        />
      </Box>
      <Flex
        flexDirection={"column"}
        gap={"30px"}
        width={{ base: "100%", md: "576px" }}
        position={"absolute"}
        alignItems={{ base: "center", md: "flex-start" }}
        bottom={{ base: "0", md: "30px", lg: "60px" }}
        left={{ base: "0", md: "30px", lg: "90px" }}
      >
        <Flex flexDirection={"column"} gap={{ base: "12px", md: "18px" }}>
          <Text
            display={"flex"}
            flexDirection={"column"}
            fontSize={{ base: "30px", md: "54px" }}
            fontWeight={{ base: 700, md: 600 }}
            color={"#1C1C1C"}
            lineHeight={{ base: "36px", md: "66px" }}
            letterSpacing={{ base: "-0.81px", md: "-1.8px" }}
            textTransform={"uppercase"}
            textAlign={{ base: "center", md: "left" }}
          >
            L2 On-Demand{" "}
            <Text
              as={"span"}
              fontSize={{ base: "30px", md: "60px" }}
              letterSpacing={{ base: "-0.9px", md: "-1.8px" }}
            >
              Tailored Ethereum
            </Text>
          </Text>
          <Text
            display={"flex"}
            flexDir={"column"}
            fontSize={{ base: "13px", md: "20px" }}
            fontWeight={500}
            color={"#1C1C1C"}
            lineHeight={{ base: "normal", md: "27px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Explore and Deploy your On-Demand Appchain{" "}
            <Text as={"span"}>
              A Fast, Secure, and Fully Customizable L2 Appchain
            </Text>{" "}
          </Text>
        </Flex>
        <Flex gap={"15px"}>
          <Button
            w={"132px"}
            px={"15px"}
            py={"12px"}
            borderRadius={"23px"}
            fontFamily={"Proxima Nova"}
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"21px"}
            textAlign={"center"}
            border={"2px solid #DFE4EE"}
            background={"rgba(255, 255, 255, 0.25)"}
            color={"#1C1C1C"}
            cursor={"pointer"}
            _hover={{
              background: "#1C1C1C",
              color: "#FFFFFF",
              borderColor: "#1C1C1C",
            }}
          >
            Documents
          </Button>
          <Button
            w={"132px"}
            px={"15px"}
            py={"12px"}
            borderRadius={"23px"}
            border={"none"}
            background={"#1C1C1C"}
            color={"#FFFFFF"}
            cursor={"pointer"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ background: "#0070ED" }}
          >
            <Flex gap={"6px"} alignItems={"center"} justifyContent={"center"}>
              <Text
                fontSize={"14px"}
                fontWeight={600}
                lineHeight={"21px"}
                textAlign={"center"}
              >
                Discover
              </Text>
              <Image
                src={RightArrowIcon}
                alt="right-arrow"
                width={14}
                height={14}
              />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
