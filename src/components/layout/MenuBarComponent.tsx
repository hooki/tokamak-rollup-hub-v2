"use client";

import { MENUBAR_ITEMS } from "@/consts/menubar";
import { Button, Flex, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import MenuIcon from "@/assets/icon/menu.svg";
import CloseIcon from "@/assets/icon/close.svg";
import Image from "next/image";

interface MenuBarComponentProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function MenuBarComponent({
  isMenuOpen,
  setIsMenuOpen,
}: MenuBarComponentProps) {
  return (
    <>
      <Button
        display={{ base: "flex", md: !isMenuOpen ? "none" : "flex" }}
        cursor={"pointer"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        position={isMenuOpen ? "absolute" : ""}
        top={22}
        right={22}
        bgColor={"transparent"}
        border={"none"}
      >
        <Image
          src={isMenuOpen ? CloseIcon : MenuIcon}
          alt="menu"
          width={35}
          height={36}
        />
      </Button>
      <Flex
        flexDir={isMenuOpen ? "column" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={isMenuOpen ? "100%" : ""}
        gap={isMenuOpen ? "39px" : "45px"}
        display={{ base: isMenuOpen ? "flex" : "none", md: "flex" }}
      >
        {MENUBAR_ITEMS.map((item) => (
          <Text
            key={item.label}
            color={"#2E2E3A"}
            fontSize={isMenuOpen ? "30px" : "15px"}
            fontWeight={600}
            lineHeight={"normal"}
            textAlign={"center"}
            cursor={"pointer"}
            onClick={() => redirect(item.href)}
            _hover={{ color: "#0070ED" }}
            zIndex={3000}
          >
            {item.label}
          </Text>
        ))}
      </Flex>
    </>
  );
}
