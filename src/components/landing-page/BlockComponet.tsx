"use client";
import { useBreakpoint } from "@/hooks/breakpoint";
import { Flex, Text } from "@chakra-ui/react";
import { BUILDING_BLOCKS_TEXT } from "@/consts/texts";
import DotLogoImage from "@/assets/logo/dot-logo.svg";
import Image from "next/image";
export default function BlockComponent() {
  const { width } = useBreakpoint();
  return (
    <Flex flexDir={"column"} gap={"45px"} justifyContent={"center"}>
      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        gap={"40px"}
        alignItems={"center"}
      >
        <Flex
          minWidth={"50%"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={0}
        >
          <Image
            src={DotLogoImage}
            alt="dot-logo"
            width={width < 800 ? 337 : 492}
            height={width < 800 ? 185 : 270}
          />
        </Flex>
        <Flex flexDir={"column"} gap={"12px"}>
          <Text
            color="#1C1C1C"
            fontSize={{ base: "42px", sm: "60px" }}
            fontWeight={700}
            lineHeight={"66px"}
            textAlign={{ base: "center", lg: "justify" }}
            letterSpacing={"-1.8px"}
          >
            {BUILDING_BLOCKS_TEXT.title}
          </Text>
          <Text
            color={"#252525"}
            textAlign={{ base: "center", lg: "justify" }}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"20px"}
          >
            {BUILDING_BLOCKS_TEXT.description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
