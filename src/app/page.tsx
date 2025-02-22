import TitleComponent from "@/containers/landing-page/TitleComponent";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      height={"100vh"}
      position={"relative"}
      left={"0px"}
      className="page-section"
    >
      <Flex height={"100vh"}></Flex>
      <TitleComponent />
    </Flex>
  );
}
