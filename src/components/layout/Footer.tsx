import { Flex, Text } from "@chakra-ui/react";
import GithubIcon from "@/assets/icon/github.svg";
import TelegramIcon from "@/assets/icon/telegram.svg";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_URL, TELEGRAM_URL } from "@/consts/socials";

export default function Footer() {
  return (
    <Flex px={"30px"} py={"24px"} background={"#FAFBFC"}>
      <Flex gap={"18px"} alignItems={"center"}>
        <Text
          fontFamily={"Open Sans"}
          fontSize={"11px"}
          fontWeight={400}
          letterSpacing={"0.55px"}
          lineHeight={"normal"}
          color={"#999999"}
        >
          ©2025 
          <Text as={"span"} color={"#1C1C1C"}>
            Tokamak Rollup Hub
          </Text>{" "}
          <Text as={"span"} display={{ base: "none", md: "inline" }}>
            All Rights Reserved.
          </Text>
        </Text>
        <Flex gap={"12px"} alignItems={"center"} justifyContent={"center"}>
          <Link href={GITHUB_URL} target="_blank" style={{ height: "16px" }}>
            <Image src={GithubIcon} alt="github" />
          </Link>
          <Link href={TELEGRAM_URL} target="_blank" style={{ height: "16px" }}>
            <Image src={TelegramIcon} alt="telegram" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
