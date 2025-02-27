"use client";
import { useBreakpoint } from "@/app/hooks/breakpoint";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import TrhCenterIcon from "@/assets/trh-center.svg";
import PlanetEllipseComponent from "@/components/solar/PlanetEllipseComponent";

export default function SolarEllipseContainer() {
  const { isMobile, isTablet } = useBreakpoint();
  const imageWidth = isMobile ? 75 : isTablet ? 125 : 200;
  return (
    <Flex
      width={{ base: "533.33px", md: "100%" }}
      height={{ base: "533.33px", md: "100%" }}
      justifyContent={"center"}
      alignItems={"center"}
      className="solar-component"
    >
      <Box className="solar-component-container">
        <Image
          src={TrhCenterIcon}
          alt="trh-center"
          width={imageWidth}
          height={imageWidth}
        />
        <PlanetEllipseComponent />
      </Box>
    </Flex>
  );
}
