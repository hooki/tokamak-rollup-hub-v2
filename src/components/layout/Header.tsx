"use client";
import { Flex } from "@chakra-ui/react";
import LogoComponent from "./LogoComponent";
import MenuBarComponent from "./MenuBarComponent";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMenuOpen);
    if (isMenuOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  return (
    <Flex
      h={isMenuOpen ? "100vh" : "78px"}
      px={{ base: "20px", sm: "30px" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {!isMenuOpen && <LogoComponent />}
      <MenuBarComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Flex>
  );
}
