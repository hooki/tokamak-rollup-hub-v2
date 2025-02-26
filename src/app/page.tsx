import TitleComponent from "@/containers/landing-page/TitleComponent";
import { Flex } from "@chakra-ui/react";
import SolarComponent from "@/containers/landing-page/SolarComponent";
export default function Home() {
  return (
    <Flex
      position={"relative"}
      left={"0px"}
      className="page-section"
      height={"100vh"}
      overflow={"hidden"}
      flexDir={{ base: "column", md: "row" }}
    >
      <SolarComponent />
      <TitleComponent />
    </Flex>
  );
}
