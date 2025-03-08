"use client";
import {
  PRODUCT_CATEGORIES,
  SUB_PRODUCT_CATEGORIES,
} from "@/consts/components";
import {
  AccordionItemTrigger,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionRoot,
} from "@/components/ui/accordion";
import { useState } from "react";
import SearchIcon from "@/assets/icon/search.svg";
import Image from "next/image";
export default function AccodionContainer() {
  const [currentCategory, setCurrentCategory] = useState<string[]>(["all"]);
  return (
    <Stack direction={"column"} w={"219px"} gap={"15px"}>
      <Stack direction={"column"} w="100%" gap={"6px"}>
        <Text
          display={"flex"}
          fontSize={"20px"}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-0.6px"}
          height={"45px"}
          alignItems={"center"}
        >
          Categories
        </Text>
        <AccordionRoot
          defaultValue={["all"]}
          cursor={"pointer"}
          w={"100%"}
          value={currentCategory}
          onValueChange={(e) => setCurrentCategory(e.value)}
          collapsible
          spaceY={"6px"}
        >
          {PRODUCT_CATEGORIES.map((item) => (
            <AccordionItem key={item.id} value={item.id} w={"100%"}>
              <AccordionItemTrigger
                cursor={"pointer"}
                w={"100%"}
                h={"36px"}
                border="none"
                fontFamily={"Proxima Nova"}
                display={"flex"}
                borderRadius={"6px"}
                pl={"15px"}
                alignItems={"center"}
                fontSize={"16px"}
                fontWeight={500}
                lineHeight={"normal"}
                letterSpacing={"-0.4px"}
                bg={
                  currentCategory.includes(item.id) ? "#1C1C1C" : "transparent"
                }
                color={currentCategory.includes(item.id) ? "#FFF" : "#1C1C1C"}
                _hover={{
                  bg: "#1C1C1C",
                  color: "#FFF",
                }}
              >
                {item.name}
              </AccordionItemTrigger>
              <AccordionItemContent>
                <Stack
                  direction={"column"}
                  w={"100%"}
                  gap={"6px"}
                  mt={
                    SUB_PRODUCT_CATEGORIES[item.id].length > 0 ? "6px" : "0px"
                  }
                >
                  {SUB_PRODUCT_CATEGORIES[item.id].map((subItem) => (
                    <Text
                      pl={"45px"}
                      key={subItem.id}
                      h={"36px"}
                      w={"100%"}
                      display={"flex"}
                      alignItems={"center"}
                      borderRadius={"6px"}
                      fontSize={"16px"}
                      fontWeight={500}
                      lineHeight={"normal"}
                      letterSpacing={"-0.4px"}
                      bg={"transparent"}
                      color={"#1C1C1C"}
                      _hover={{
                        bg: "#1C1C1C",
                        color: "#FFF",
                      }}
                    >
                      {subItem.name}
                    </Text>
                  ))}
                </Stack>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Stack>
      <Flex
        padding={"10px 15px"}
        alignItems={"center"}
        bgColor={"#FFFF"}
        borderRadius={"8px"}
        border={"1px solid #E8EDF2"}
        gap={"8px"}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Input
          w={"100%"}
          fontSize={"16px"}
          fontWeight={500}
          lineHeight={"normal"}
          letterSpacing={"-0.4px"}
          placeholder="Search"
          bgColor={"#FFFF"}
          border={"none"}
          color={"#1C1C1C"}
          py={"2.5px"}
          _focus={{
            outline: "none",
          }}
        />
        <Image src={SearchIcon} alt="search" />
      </Flex>
    </Stack>
  );
}
