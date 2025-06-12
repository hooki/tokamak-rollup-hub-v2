"use client";
import { Flex } from "@chakra-ui/react";
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
    <>
      <Flex
        h={isMenuOpen ? "100vh" : "78px"}
        px={{ base: "20px", md: "30px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"fixed"}
        width={"100%"}
        zIndex={1000}
        backgroundColor={
          isMenuOpen
            ? "#FAFBFC"
            : isScrolled
            ? "rgba(250, 251, 252, 0.75)"
            : "transparent"
        }
        pr={"20px"}
      >
        {!isMenuOpen && <LogoComponent />}
        <MenuBarComponent
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </Flex>
    </>
  );
}
