"use client";
import { Flex } from "@chakra-ui/react";
import UpArrowIcon from "@/assets/icon/up-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UpArrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex
      position={"fixed"}
      bottom={"120px"}
      right={"30px"}
      display={isVisible ? "flex" : "none"}
      cursor={"pointer"}
      onClick={handleScrollUp}
    >
      <Image src={UpArrowIcon} alt="up-arrow" />
    </Flex>
  );
}
