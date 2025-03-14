"use client";
import AccodionContainer from "@/containers/discover-page/AccodionContainer";
import { ProductListContainer } from "@/containers/discover-page/ProductListContainer";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Discover() {
  const searchParams = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState<
    "all" | "stack" | "integration"
  >((searchParams.get("category") as "all" | "stack" | "integration") || "all");

  const [currentItem, setCurrentItem] = useState<string | null>(null);
  return (
    <Box
      className="discover-page"
      w={"100%"}
      pt={"78px"}
      mb={"30px"}
      px={{ base: "30px", lg: "40px" }}
      minH={`calc(100vh - ${95}px)`}
      bgColor={"#FAFBFC"}
    >
      <Box maxW={"1200px"} mx={"auto"} width={"100%"}>
        <Flex
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100vh"}
          zIndex={1}
          bg={"url(/images/discover-bg.png) no-repeat center center"}
          bgSize={"cover"}
        ></Flex>
        <Flex
          flexDir={"column"}
          pt={"120px"}
          pb="90px"
          gap={{ base: "60px", md: "120px" }}
        >
          <Flex flexDir={"column"} gap={"15px"}>
            <Text
              fontSize={{ base: "30px", md: "54px", lg: "70px" }}
              fontWeight={700}
              lineHeight={{ base: "36px", md: "60px", lg: "75px" }}
              letterSpacing={{
                base: "-0.9px",
                md: "-1.62px",
                lg: "-2.1px",
                "2xl": "-2.8px",
              }}
              maxW={"897px"}
            >
              Explore Limitless Possibilities, Contribute Seamlessly
            </Text>
            <Text
              fontSize={{ base: "13px", md: "24px" }}
              fontWeight={400}
              lineHeight={"normal"}
            >
              Browse through all the things you want to find.
            </Text>
          </Flex>
          <Stack
            direction={{ base: "column", lg: "row" }}
            gap={{ base: "83px", lg: "45px" }}
          >
            <AccodionContainer
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
            <ProductListContainer
              category={currentCategory}
              item={currentItem}
            />
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
