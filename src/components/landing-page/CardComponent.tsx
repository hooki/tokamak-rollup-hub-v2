"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import ComponentIcon from "@/assets/icon/component.svg";
import { useState } from "react";

export default function CardComponent({
  title,
  description,
  featured,
}: {
  title: string;
  description: string;
  featured: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      flexDir={"column"}
      gap={"15px"}
      p={"20px"}
      border={"1px solid #E1E8ED"}
      borderRadius={"15px"}
      alignItems={"flex-start"}
      alignSelf={"stretch"}
      mr={"1px"}
      bgColor={"#FFF"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor={"pointer"}
    >
      <Flex gap={"15px"} alignItems={"center"}>
        <Image src={ComponentIcon} alt="component" />
        <Flex flexDir={"column"} alignItems={"flex-start"}>
          <Text
            fontSize={"20px"}
            fontWeight={"700"}
            lineHeight={"normal"}
            letterSpacing={"-0.6px"}
            _hover={{ color: "#0070ED" }}
            cursor={"pointer"}
            color={isHovered ? "#0070ED" : "#1C1C1C"}
          >
            {title}
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            color={"#252525"}
          >
            {featured ? "Featured" : "New"}
          </Text>
        </Flex>
      </Flex>
      <Box w={"100%"} h={"1px"} bg={"#E1E8ED"} alignSelf={"stretch"} />
      <Text
        fontSize={"14px"}
        fontWeight={"400"}
        lineHeight={"24px"}
        color={"#252525"}
        minHeight={{ base: "288px", md: "96px" }}
        WebkitLineClamp={{ base: 12, md: 4 }}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </Text>
    </Flex>
  );
}
