"use client";
import TrhCenterIcon from "@/assets/trh-center.svg";
import Image from "next/image";
import "@/assets/css/solar.css";
import PlanetComponent from "@/components/solar/PlanetComponent";
import { Box, Flex } from "@chakra-ui/react";
import { PLANETS } from "@/consts/solar";

export default function SolarComponent() {
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      className="solar-component"
    >
      <Box className="solar-component-container">
        <Image src={TrhCenterIcon} alt="trh-center" />
        {PLANETS.map((planet) => (
          <PlanetComponent
            key={planet.title}
            title={planet.title}
            size={planet.size}
            orbitRadius={planet.orbitRadius}
            orbitDuration={planet.orbitDuration}
            hasSatellite={planet.hasSatellite}
          />
        ))}
      </Box>
    </Flex>
  );
}
