"use client";
import { SubProductDetailType } from "@/types/products";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const StackComponent: React.FC<SubProductDetailType> = ({
  name,
  description,
  image,
  link,
}) => {
  const router = useRouter();
  return (
    <Flex flexDir={"column"} gap={"12px"} width={"100%"}>
      <Box
        width={"100%"}
        height={246}
        borderRadius={"15px"}
        border="1px solid #E1E8ED"
        bgColor={"#FFF"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={image ?? "/images/default-bg.png"}
          alt="stack-image"
          width={300}
          height={150}
        />
      </Box>
      <Text
        overflow={"hidden"}
        fontSize={{ base: "21px", md: "24px" }}
        fontWeight={700}
        lineHeight={"normal"}
        whiteSpace={"nowrap"}
        textOverflow={"ellipsis"}
      >
        {name}
      </Text>
      <Text
        fontSize={"14px"}
        fontWeight={400}
        lineHeight={"normal"}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        WebkitLineClamp={2}
      >
        {description}
      </Text>
      <Text
        fontSize={"13px"}
        fontWeight={700}
        lineHeight={"normal"}
        _hover={{ textDecoration: "underline" }}
        cursor={"pointer"}
        onClick={() => {
          if (link) {
            router.push(link);
          }
        }}
      >
        Find more
      </Text>
    </Flex>
  );
};
