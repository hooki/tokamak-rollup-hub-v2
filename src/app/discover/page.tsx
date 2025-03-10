"use client";
import AccodionContainer from "@/containers/discover-page/AccodionContainer";
import { ProductListContainer } from "@/containers/discover-page/ProductListContainer";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
export default function Discover() {
  const [currentCategory, setCurrentCategory] = useState<
    "all" | "stack" | "integration"
  >("all");
  return (
    <Box
      className="discover-page"
      w={"100%"}
      mt={"78px"}
      mb={"30px"}
      px={"360px"}
      bgColor={"#FAFBFC"}
      minH={`calc(100vh - ${95}px)`}
    >
      <Flex flexDir={"column"} pt={"120px"} pb="90px" gap={"120px"}>
        <Flex flexDir={"column"} gap={"15px"}>
          <Text
            fontSize={"70px"}
            fontWeight={700}
            lineHeight={"75px"}
            letterSpacing={"-2.1px"}
            maxW={"897px"}
          >
            Explore Limitless Possibilities, Contribute Seamlessly
          </Text>
          <Text fontSize={"24px"} fontWeight={400} lineHeight={"normal"}>
            Browse through all the things you want to find.
          </Text>
        </Flex>
        <Stack direction={"row"} gap={"45px"}>
          <AccodionContainer
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <ProductListContainer category={currentCategory} />
        </Stack>
      </Flex>
    </Box>
  );
}
