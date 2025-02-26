"use client";
import TrhCenterIcon from "@/assets/trh-center.svg";
import Image from "next/image";
import "@/assets/css/solar.css";
import PlanetComponent from "@/components/solar/PlanetComponent";
import { Box, Flex } from "@chakra-ui/react";
import { PLANETS } from "@/consts/solar";
import { useBreakpoint } from "@/app/hooks/breakpoint";
export default function SolarComponent() {
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
        {PLANETS.map((planet) => (
          <PlanetComponent
            key={planet.title}
            title={planet.title}
            size={planet.size}
            orbitRadius={planet.orbitRadius}
            orbitRadiusTablet={planet.orbitRadiusTablet}
            orbitRadiusMobile={planet.orbitRadiusMobile}
            orbitDuration={planet.orbitDuration}
            hasSatellite={planet.hasSatellite}
          />
        ))}
      </Box>
    </Flex>
  );
}
