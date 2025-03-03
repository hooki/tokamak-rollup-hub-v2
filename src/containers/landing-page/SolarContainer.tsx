"use client";
import "@/assets/css/solar.css";
import PlanetComponent from "@/components/solar/PlanetComponent";
import { Box, Flex } from "@chakra-ui/react";
import { PLANETS } from "@/consts/solar";
export default function SolarContainer() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      className="solar-component"
      zIndex={1}
    >
      <Box className="solar-component-container">
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
