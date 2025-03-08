import AccodionContainer from "@/containers/discover-page/AccodionContainer";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
export default function Discover() {
  return (
    <Box
      mr={"78px"}
      mb={"30px"}
      px={"360px"}
      bgColor={"#FAFBFC"}
      minH={`calc(100vh - ${95}px)`}
    >
      {/* <Box position={"absolute"} left={237} top={-237}>
        <Image
          src={"/images/discover-bg.png"}
          alt="discover"
          width={2139}
          height={1290}
        />
      </Box> */}
      <Flex flexDir={"column"} pt={"120px"} pb="90px" gap={"120px"}>
        <Flex flexDir={"column"} gap={"15px"}>
          <Text
            fontSize={"70px"}
            fontWeight={700}
            lineHeight={"75px"}
            letterSpacing={"-2.1px"}
            maxW={"897px"}
          >
            Explore Limitless Possibilities, Contribute Seamlessly
          </Text>
          <Text fontSize={"24px"} fontWeight={400} lineHeight={"normal"}>
            Browse through all the things you want to find.
          </Text>
        </Flex>
        <Stack direction={"row"} gap={"45px"}>
          <AccodionContainer />
          <Box></Box>
        </Stack>
      </Flex>
    </Box>
  );
}
