"use client";
import {
  PRODUCT_CATEGORIES,
  SUB_PRODUCT_CATEGORIES,
} from "@/consts/components";
import { AccordionItemTrigger, Flex, Stack, Text } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionRoot,
} from "@/components/ui/accordion";
import Image from "next/image";
import { ProductCategoryType } from "@/types/products";
import DropdownIcon from "@/assets/icon/dropdown.svg";
import { useState } from "react";
import { useBreakpoint } from "@/hooks/breakpoint";

const AccordionComponent = ({
  currentCategory,
  setCurrentCategory,
  currentItem,
  setCurrentItem,
}: {
  currentCategory: ProductCategoryType;
  setCurrentCategory: (category: ProductCategoryType) => void;
  currentItem: string | null;
  setCurrentItem: (item: string | null) => void;
}) => {
  return (
    <Stack direction={"column"} w="219px" gap={"6px"} zIndex={100}>
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
        value={[currentCategory]}
        onValueChange={(e) => {
          if (!e.value[0]) {
            setCurrentCategory("all");
            setCurrentItem(null);
          } else {
            setCurrentCategory(e.value[0] as ProductCategoryType);
            setCurrentItem(null);
          }
        }}
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
                currentCategory.includes(item.id) && !currentItem
                  ? "#1C1C1C"
                  : "transparent"
              }
              color={
                currentCategory.includes(item.id) && !currentItem
                  ? "#FFF"
                  : "#1C1C1C"
              }
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
                mt={SUB_PRODUCT_CATEGORIES[item.id].length > 0 ? "6px" : "0px"}
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
                    bg={currentItem === subItem.id ? "#1C1C1C" : "transparent"}
                    color={currentItem === subItem.id ? "#FFF" : "#1C1C1C"}
                    _hover={{
                      bg: "#1C1C1C",
                      color: "#FFF",
                    }}
                    onClick={() => {
                      setCurrentItem(subItem.id);
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
  );
};

const DropdownComponent = ({
  currentCategory,
  setCurrentCategory,
  currentItem,
  setCurrentItem,
}: {
  currentCategory: ProductCategoryType;
  currentItem: string | null;
  setCurrentCategory: (category: ProductCategoryType) => void;
  setCurrentItem: (item: string | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(
    "Categories - View all"
  );
  return (
    <Flex
      zIndex={100}
      flexDir={"column"}
      w={{ base: "100%", md: "219px" }}
      padding={"10px 15px"}
      gap={"18px"}
      borderRadius={"8px"}
      border={"1px solid #E8EDF2"}
      background={"FFF"}
      cursor={"pointer"}
      bgColor={"#FFF"}
      position={"absolute"}
      top={"0"}
      left={"0"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => setIsOpen(!isOpen)}
        width={"100%"}
      >
        <Text color={"#07070C"} fontSize={"16px"} lineHeight={"normal"}>
          {activeCategory}
        </Text>
        <Image src={DropdownIcon} alt="dropdown" />
      </Flex>
      <Stack
        width={"100%"}
        direction={"column"}
        gap={"6px"}
        display={isOpen ? "flex" : "none"}
      >
        {PRODUCT_CATEGORIES.map((item) => (
          <Flex
            key={item.id}
            gap={"6px"}
            alignItems={"flex-start"}
            width={"100%"}
            flexDir={"column"}
          >
            <Text
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              pl={"15px"}
              height={"36px"}
              fontSize={"16px"}
              fontWeight={500}
              letterSpacing={"-0.48px"}
              lineHeight={"normal"}
              borderRadius={"6px"}
              bgColor={
                !currentItem && currentCategory.includes(item.id)
                  ? "#1C1C1C"
                  : "transparent"
              }
              color={
                !currentItem && currentCategory.includes(item.id)
                  ? "#FFF"
                  : "#1C1C1C"
              }
              _hover={{
                bg: "#1C1C1C",
                color: "#FFF",
              }}
              onClick={() => {
                setCurrentCategory(item.id as ProductCategoryType);
                setActiveCategory(
                  `${item.id === "all" ? "Categories - " : ""}${item.name}`
                );
                setCurrentItem(null);
                setIsOpen(false);
              }}
            >
              {item.name}
            </Text>
            {SUB_PRODUCT_CATEGORIES[item.id].map((subItem) => (
              <Text
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                h={"36px"}
                pl={"45px"}
                key={subItem.id}
                fontSize={"16px"}
                fontWeight={500}
                letterSpacing={"-0.49px"}
                borderRadius={"6px"}
                bgColor={currentItem === subItem.id ? "#1C1C1C" : "transparent"}
                color={currentItem === subItem.id ? "#FFF" : "#1C1C1C"}
                _hover={{
                  bg: "#1C1C1C",
                  color: "#FFF",
                }}
                onClick={() => {
                  setCurrentItem(subItem.id);
                  setCurrentCategory(item.id as ProductCategoryType);
                  setActiveCategory(subItem.name);
                  setIsOpen(false);
                }}
              >
                {subItem.name}
              </Text>
            ))}
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

export default function AccodionContainer({
  currentCategory,
  setCurrentCategory,
  currentItem,
  setCurrentItem,
}: {
  currentCategory: ProductCategoryType;
  setCurrentCategory: (category: ProductCategoryType) => void;
  currentItem: string | null;
  setCurrentItem: (item: string | null) => void;
}) {
  const { isDesktop } = useBreakpoint();
  return (
    <Stack
      direction={{ base: "row", lg: "column" }}
      minWidth={{ base: "100%", lg: "219px" }}
      gap={"15px"}
      justifyContent={{ base: "flex-end", lg: "flex-start" }}
      alignItems={{ base: "flex-start", lg: "flex-start" }}
      position={"relative"}
    >
      {isDesktop ? (
        <AccordionComponent
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      ) : (
        <DropdownComponent
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      )}
      {/* <Flex
        padding={"10px 15px"}
        alignItems={"center"}
        bgColor={"#FFFF"}
        borderRadius={"8px"}
        border={"1px solid #E8EDF2"}
        gap={"8px"}
        justifyContent={"space-between"}
        w={"219px"}
        h={"44px"}
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
      </Flex> */}
    </Stack>
  );
}
