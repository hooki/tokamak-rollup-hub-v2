import TitleContainer from "@/containers/landing-page/TitleContainer";
import { Flex } from "@chakra-ui/react";
import SolarContainer from "@/containers/landing-page/SolarContainer";
import DetailContainer from "@/containers/landing-page/DetailContainer";
export default function Home() {
  return (
    <Flex
      position={"relative"}
      className="page-section"
      overflow={"hidden"}
      flexDir={"column"}
    >
      <SolarContainer />
      <TitleContainer />
      <DetailContainer />
    </Flex>
  );
}
