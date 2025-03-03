"use client";
import { useBreakpoint } from "@/app/hooks/breakpoint";
import { Flex, Text } from "@chakra-ui/react";
import { BLOCK_LIST, BUILDING_BLOCKS_TEXT } from "@/consts/texts";
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
        <Flex minWidth={"50%"} alignItems={"center"} justifyContent={"center"}>
          <video
            loop
            autoPlay
            muted
            height={width < 400 ? "155px" : "198px"}
            width={width < 400 ? "337px" : "435px"}
            style={{
              clipPath: "inset(4px)",
              backgroundColor: "transparent",
              zIndex: -1000,
            }}
          >
            <source src={"/mov/building-block.mp4"} type="video/mp4" />
            <Image
              src={DotLogoImage}
              alt="dot-logo"
              width={width < 400 ? 337 : 435}
              height={width < 400 ? 155 : 198}
            />
          </video>
        </Flex>
        <Flex flexDir={"column"} gap={"12px"}>
          <Text
            color="#1C1C1C"
            fontSize={{ base: "42px", sm: "60px" }}
            fontWeight={700}
            lineHeight={"66px"}
            textAlign={{ base: "center", lg: "right" }}
            letterSpacing={"-1.8px"}
          >
            {BUILDING_BLOCKS_TEXT.title}
          </Text>
          <Text
            color={"#252525"}
            textAlign={{ base: "center", lg: "right" }}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"20px"}
          >
            {BUILDING_BLOCKS_TEXT.description}
          </Text>
        </Flex>
      </Flex>
      {BLOCK_LIST.map((block) => (
        <Flex key={block.title} flexDir={"column"} gap={"10px"}>
          <Text
            fontSize={{ base: "28px", sm: "40px" }}
            fontWeight={700}
            lineHeight={"normal"}
            letterSpacing={"-1.2px"}
          >
            {block.title}
          </Text>
          <Text
            color={"#252525"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"20px"}
          >
            {block.description}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
