import { SubProductDetailType } from "@/types/products";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const IntegrationComponent: React.FC<SubProductDetailType> = ({
  name,
  description,
  category,
}) => {
  return (
    <Flex
      flexDirection={"column"}
      gap={"20px"}
      alignItems={"center"}
      width={"100%"}
      padding={"24px 20px"}
      borderRadius={"15px"}
      border={"1px solid #E1E8ED"}
      bgColor={"#FFF"}
    >
      <Flex flexDirection={"column"} gap={"15px"} alignItems={"center"}>
        <Box
          width={"60px"}
          height={"60px"}
          p={"27px 14px"}
          borderRadius={"35px"}
          border={"1px solid #E1E8ED"}
          bgColor={"#FFF"}
        ></Box>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Text
            fontSize={"16px"}
            fontWeight={700}
            lineHeight={"normal"}
            letterSpacing={"-0.48px"}
          >
            {name}
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={400}
            lineHeight={"20px"}
            color={"#252525"}
          >
            {category}
          </Text>
        </Flex>
      </Flex>
      <Text
        fontSize={"14px"}
        fontWeight={400}
        lineHeight={"24px"}
        textAlign={"center"}
        color={"#252525"}
      >
        {description}
      </Text>
      <Button
        width={"100%"}
        p={"9px 15px"}
        borderRadius={"17.5px"}
        border={"1px solid #DFE4EE"}
        bgColor={"rgba(255, 255, 255, 0.25)"}
        fontSize={"14px"}
        fontWeight={600}
        lineHeight={"normal"}
        color={"#1C1C1C"}
        _hover={{
          bgColor: "#1C1C1C",
          color: "#FFF",
          border: "1px solid transparent",
        }}
        cursor={"pointer"}
        fontFamily={"Proxima Nova"}
      >
        Find more
      </Button>
    </Flex>
  );
};
