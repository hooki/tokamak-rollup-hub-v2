import TitleComponent from "@/containers/landing-page/TitleComponent";
import { Flex } from "@chakra-ui/react";
import SolarComponent from "@/containers/landing-page/SolarComponent";
export default function Home() {
  return (
    <Flex
      height={"100vh"}
      position={"relative"}
      left={"0px"}
      className="page-section"
    >
      <SolarComponent />
      <TitleComponent />
    </Flex>
  );
}
