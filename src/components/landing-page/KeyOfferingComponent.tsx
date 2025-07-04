import { KEY_OFFERING_LIST } from "@/consts/texts";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Icon1 from "@/assets/icon/offering/icon1.svg";
import Icon2 from "@/assets/icon/offering/icon2.svg";
import Icon3 from "@/assets/icon/offering/icon3.svg";

export default function KeyOfferingComponent() {
  return (
    <Flex flexDir={"column"} gap={"45px"} justifyContent={"center"}>
      <Text
        width={"100%"}
        fontSize={{ base: "42px", md: "54px" }}
        fontWeight={700}
        lineHeight={"normal"}
        letterSpacing={"-1.62px"}
      >
        Rollup Hub: Built for Developers
      </Text>
      <Flex
        gap={"45px"}
        alignItems={"top"}
        flexDir={{ base: "column", lg: "row" }}
      >
        {KEY_OFFERING_LIST.map((item, index) => (
          <Flex key={item.title} flexDir={"column"} gap={"15px"} width={"100%"}>
            <Image
              src={index === 0 ? Icon1 : index === 1 ? Icon2 : Icon3}
              alt={item.title}
            />
            <Text
              fontSize={{ base: "28px", sm: "30px" }}
              fontWeight={700}
              lineHeight={"normal"}
              letterSpacing={"-0.9px"}
            >
              {item.title}
            </Text>
            <Text
              color={"#252525"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"20px"}
            >
              {item.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
