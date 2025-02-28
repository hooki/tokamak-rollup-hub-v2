import BlockComponent from "@/components/landing-page/BlockComponet";
import ComponentCarouselComponent from "@/components/landing-page/ComponentCarouselComponent";
import EndingComponent from "@/components/landing-page/EndingComponent";
import KeyOfferingComponent from "@/components/landing-page/KeyOfferingComponent";
import { Flex } from "@chakra-ui/react";

export default function DetailContainer() {
  return (
    <Flex
      px={{ base: "19px", md: "30px", lg: "120px", "2xl": "240px" }}
      py={"90px"}
      flexDir={"column"}
      gap={"150px"}
      width={"100%"}
    >
      <BlockComponent />
      <KeyOfferingComponent />
      <ComponentCarouselComponent />
      <EndingComponent />
    </Flex>
  );
}
