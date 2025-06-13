"use client";
import type { IntegrationDetailType } from "@/types/products";
import { Flex, Text, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IntegrationLogo } from "../ui/integration-logo";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export const IntegrationComponent: React.FC<IntegrationDetailType> = ({
  id,
  name,
  description,
  link,
  subCategory,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <VStack
      justify={"space-between"}
      align={"stretch"}
      width={"100%"}
      padding={"24px 20px"}
      borderRadius={"15px"}
      border={"1px solid #E1E8ED"}
      bgColor={"#FFF"}
      height={"100%"}
      minHeight={"320px"}
    >
      <HStack fontSize={"16px"} fontWeight={700} align={"center"} justify={"start"}>
        <IntegrationLogo name={id} />
        <VStack alignItems={"flex-start"} gap={0}>
          <Text>
            {name}
          </Text>
          <Text fontSize={"12px"} fontWeight={500} lineHeight={"20px"} color={"#71717a"}>
            {subCategory}
          </Text>
        </VStack>
      </HStack>

      <Text
        fontSize={"14px"}
        fontWeight={400}
        lineHeight={"24px"}
        color={"#71717a"}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        WebkitLineClamp={3}
      >
        {description}
      </Text>

      <HStack alignItems={"center"} gap={"9px"} fontSize={"13px"} fontWeight={700} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} cursor={"pointer"} onClick={() => router.push(link || "")}>
        <Text
          lineHeight={"normal"}
          color={isHovered ? "#173da6" : "#3b82f6"}
        >
          Learn more
        </Text>
        <BsChevronRight
          color={isHovered ? "#173da6" : "#3b82f6"}
        />
      </HStack>
    </VStack>
  );
};
