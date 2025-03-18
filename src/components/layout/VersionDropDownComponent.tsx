"use client";
import { TRH_V1_URL } from "@/consts/urls";
import DropdownIcon from "@/assets/icon/dropdown.svg";
import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VersionDropDownComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Flex
      ref={dropdownRef}
      py="9px"
      alignItems="flex-start"
      gap="10px"
      alignSelf="stretch"
      border="1px solid #E8EDF2"
      borderRadius="8px"
      background="#FFF"
      cursor={"pointer"}
      flexDir={"column"}
      position={"absolute"}
      right={{ base: "76px", md: "30px" }}
      top={"20px"}
    >
      <Flex
        px={"12px"}
        alignItems={"center"}
        gap={"12px"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Text
          color="#2E2E3A"
          fontSize="15px"
          fontWeight={600}
          lineHeight="normal"
        >
          Rollup Hub V2
        </Text>
        <Image
          src={DropdownIcon}
          alt="dropdown"
          width={12}
          height={12}
          style={{
            transform: isOpen ? "rotate(180deg)" : "",
            transition: "transform 0.1s ease-in-out",
          }}
        />
      </Flex>
      {isOpen && (
        <Link href={TRH_V1_URL} width={"100%"}>
          <Text
            px={"12px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            width={"100%"}
            color="#2E2E3A"
            fontSize="15px"
            fontWeight={600}
            lineHeight="normal"
            height={"36px"}
            borderRadius={"6px"}
            _hover={{
              color: "#FFF",
              bgColor: "#2E2E3A",
            }}
          >
            Rollup Hub V1
          </Text>
        </Link>
      )}
    </Flex>
  );
}
