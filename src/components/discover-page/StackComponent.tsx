"use client";
import { SubProductDetailType } from "@/types/products";
import { Box, Flex, Text, Badge, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
export const StackComponent: React.FC<SubProductDetailType> = ({
  name,
  description,
  link,
  subCategories,
  image,
}) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <VStack
      cursor={"pointer"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      width={"100%"}
      p={"30px 24px"}
      borderRadius={"15px"}
      border={"1px solid #E1E8ED"}
      background={"#FFF"}
      height={"246px"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(link ?? "")}
      position={"relative"}
    >
      <Flex flexDir={"column"} gap={"12px"}>
        {
          subCategories?.map((category) => (
            <Box key={category.name}>
              <Badge bg={category.bg} color={category.color} fontSize={"13px"} fontWeight={600} px={"10px"} py={"4px"} borderRadius={"10px"}>
                {category.name}
              </Badge>
            </Box>

          ))
        }

        <Flex flexDir={"column"} gap={"12px"}>
          <Text
            fontSize={"24px"}
            fontWeight={700}
            textOverflow={"ellipsis"}
          >
            {name}
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            color={"#71717A"}
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            WebkitLineClamp={2}
          >
            {description}
          </Text>
        </Flex>
      </Flex>

      <HStack alignItems={"center"} gap={"9px"} fontSize={"13px"} fontWeight={700}>
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

      {image && (
        <Box
          position={"absolute"}
          bottom={0}
          right={0}
          width={"190px"}
          height={"124px"}
        >
          <Image
            src={isHovered ? `${image}-hover.svg` : `${image}.svg`}
            alt={name}
            width={190}
            height={124}
            style={{
              transition: "transform 0.1s ease",
            }}
          />
        </Box>
      )}
    </VStack>
  );
};
