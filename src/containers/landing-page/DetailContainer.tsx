import BlockComponent from "@/components/landing-page/BlockComponet";
import { Flex } from "@chakra-ui/react";

export default function DetailContainer() {
  return (
    <Flex
      px={"240px"}
      py={"90px"}
      flexDir={"column"}
      gap={"150px"}
      width={"100%"}
    >
      <BlockComponent />
    </Flex>
  );
}
