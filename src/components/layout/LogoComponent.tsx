"use client";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import TokamakLogo from "@/assets/logo/tokamak.svg";
import RollupHubLogo from "@/assets/logo/rolluphub.svg";
import MainLogo from "@/assets/logo/logo.svg";
import { redirect } from "next/navigation";
export default function LogoComponent() {
  return (
    <Flex
      gap={"7.9px"}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      onClick={() => redirect("/")}
    >
      <Flex display={{ base: "none", lg: "flex" }}>
        <Image src={TokamakLogo} alt="Tokamak Logo" />
      </Flex>
      <Image src={MainLogo} alt="Main Logo" />
      <Flex display={{ base: "none", lg: "flex" }}>
        <Image src={RollupHubLogo} alt="RollupHub Logo" />
      </Flex>
    </Flex>
  );
}
