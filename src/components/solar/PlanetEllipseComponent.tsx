"use client";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

function PlanetEllipseContentComponent() {
  return (
    <Flex className="earth-orbit">
      <Box
        position="absolute"
        width="20px"
        height="20px"
        borderRadius="50%"
        background="blue"
        className="earth"
      />
    </Flex>
  );
}

const PlanetEllipseComponent = dynamic(
  () => Promise.resolve(PlanetEllipseContentComponent),
  {
    ssr: false,
  }
);

export default PlanetEllipseComponent;
