"use client";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function EndingComponent() {
  return (
    <Flex flexDir={"column"} gap={"45px"} alignItems={"center"}>
      <Flex flexDir={"column"} gap={"15px"} alignItems={"center"}>
        <Text
          fontSize={{ base: "16px", md: "24px" }}
          fontWeight={400}
          lineHeight={"normal"}
          textAlign={"center"}
        >
          Discover the Power of Custom Appchain with Tokamak Rollup Hub
        </Text>
        <Text
          fontSize={{ base: "42px", md: "70px" }}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={{ base: "1.26px", md: "-2.1px" }}
          textAlign={"center"}
        >
          Build Smarter, Contribute Freely
        </Text>
      </Flex>
      <Button
        px={"15px"}
        py={"12px"}
        borderRadius={"23px"}
        bgColor={"#1C1C1C"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#fff"}
        width={"180px"}
        height={"45px"}
        border={"none"}
        cursor={"pointer"}
        _hover={{ bg: "#0070ED" }}
        fontFamily={"Proxima Nova"}
        fontSize={"14px"}
        fontWeight={600}
        lineHeight={"21px"}
      >
        Discover
      </Button>
    </Flex>
  );
}
