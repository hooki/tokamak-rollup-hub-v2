"use client";
import { HStack } from "@chakra-ui/react";
import LogoComponent from "./LogoComponent";
import MenuBarComponent from "./MenuBarComponent";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isMenuOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HStack
      h={isMenuOpen ? "100vh" : "78px"}
      px={{ base: "20px", md: "30px", lg: "90px" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      width={"100%"}
      zIndex={1000}
      bg={
        isMenuOpen
          ? "#FAFBFC"
          : isScrolled
            ? "white"
            : "transparent"
      }
    >
      {!isMenuOpen && <LogoComponent />}
      <MenuBarComponent
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </HStack>
  );
}
