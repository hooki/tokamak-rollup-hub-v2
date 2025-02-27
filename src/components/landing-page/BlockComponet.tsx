import { Flex, Text } from "@chakra-ui/react";
import { BUILDING_BLOCKS_TEXT } from "@/consts/texts";
export default function BlockComponent() {
  return (
    <Flex flexDir={"column"} gap={"45px"} justifyContent={"center"}>
      <Flex gap={"40px"} alignItems={"center"}>
        <Flex
          minWidth={"700px"}
          minHeight={"270px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <video
            loop
            autoPlay
            muted
            width={"435px"}
            height={"198px"}
            style={{
              clipPath: "inset(3px)",
              backgroundColor: "transparent",
              zIndex: -1000,
            }}
          >
            <source src={"/mov/building-block.mp4"} type="video/mp4" />
          </video>
        </Flex>
        <Flex flexDir={"column"} gap={"12px"}>
          <Text
            color="#1C1C1C"
            fontSize={"60px"}
            fontWeight={700}
            lineHeight={"66px"}
            textAlign={"right"}
            letterSpacing={"-1.8px"}
          >
            {BUILDING_BLOCKS_TEXT.title}
          </Text>
          <Text
            color={"#252525"}
            textAlign={"right"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"20px"}
          >
            {BUILDING_BLOCKS_TEXT.description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
