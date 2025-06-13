"use client";
import { useState } from "react";
import { Box, Button, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import RightArrowIcon from "@/assets/icon/next-icon.svg";
import Image from "next/image";
import TrhCenterIcon from "@/assets/trh-center.svg";
import { useBreakpoint } from "@/hooks/breakpoint";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { USER_GUIDE_URL } from "@/consts/urls";
export default function TitleContainer() {
  const { isMobile, isTablet } = useBreakpoint();
  const imageWidth = isMobile ? 75 : isTablet ? 125 : 200;
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={{ base: "833px", md: "100vh" }}
      position={"relative"}
      className="title-component"
    >
      <Box
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "307px", md: "0" }}
        left={{ base: "50%", md: "0" }}
        transform={{ base: "translate(-50%, 0%)", md: "translate(0%, 0%)" }}
      >
        <Image
          src={TrhCenterIcon}
          alt="trh-center"
          width={imageWidth}
          height={imageWidth}
        />
      </Box>
      <Flex
        flexDirection={"column"}
        gap={"30px"}
        width={{ base: "100%", md: "576px" }}
        position={"absolute"}
        alignItems={{ base: "center", md: "flex-start" }}
        bottom={{ base: "0", md: "30px", lg: "60px" }}
        left={{ base: "0", md: "30px", lg: "90px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <VStack gap={{ base: "12px", md: "18px" }}>
          <VStack fontWeight={"bold"} gap={0} lineHeight={"1"} align="stretch" fontSize={{ base: "30px", md: "60px" }}>
            <Text>
              L2 ON-DEMAND
            </Text>

            <VStack color={"#2563eb"} gap={0} align={"stretch"}>
              <Text>
                TAILORED
              </Text>
              <Text>
                ETHEREUM
              </Text>
            </VStack>
          </VStack>

          <Text
            display={"flex"}
            flexDir={"column"}
            fontSize={{ base: "13px", md: "20px" }}
            fontWeight={500}
            color={"#71717a"}>
            Explore and Deploy your On-Demand Appchain
            <Text as={"span"}>
              A Fast, Secure, and Fully Customizable L2 Appchain
            </Text>
          </Text>
        </VStack>

        <Flex gap={"15px"} zIndex={50}>
          <Link href={USER_GUIDE_URL} target="_blank">
            <Button
              px={"15px"}
              py={"12px"}
              width={"132px"}
              height={"45px"}
              borderRadius={"23px"}
              alignItems={"center"}
              justifyContent={"center"}
              fontFamily={"Proxima Nova"}
              fontSize={"14px"}
              fontWeight={600}
              textAlign={"center"}
              border={"2px solid #DFE4EE"}
              background={"rgba(255, 255, 255, 0.25)"}
              color={"#1C1C1C"}
              cursor={"pointer"}
              _hover={{
                background: "#1C1C1C",
                color: "#FFFFFF",
                borderColor: "#1C1C1C",
              }}
            >
              Documents
            </Button>
          </Link>

          <Button
            px={"15px"}
            pl={"12px"}
            width={"132px"}
            height={"45px"}
            borderRadius={"23px"}
            border={"none"}
            bg="#3b82f6"
            cursor={"pointer"}
            onClick={() => {
              router.push("/discover");
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <HStack justifyContent={"center"} alignItems={"center"}>
              <Text
                fontSize={"14px"}
                fontWeight={600}
                lineHeight={"21px"}
                textAlign={"center"}
              >
                Discover
              </Text>
              <Image
                src={RightArrowIcon}
                alt="right-arrow"
                width={14}
                height={14}
                style={{
                  transition: "transform 0.2s",
                  transform: isHovering ? "translateX(8px)" : "translateX(0)",
                }}
              />
            </HStack>
          </Button>
        </Flex>
      </Flex >
    </Flex >
  );
}
