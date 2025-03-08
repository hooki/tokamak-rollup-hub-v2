"use client";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import "@/assets/css/solar.css";
import EarthIcon from "@/assets/atom.svg";
import { keyframes } from "@emotion/react";
import { PlanetComponentProps } from "@/types/planet";
import dynamic from "next/dynamic";
import SatelliteComponent from "./SatelliteComponent";
import { useBreakpoint } from "@/hooks/breakpoint";

export function PlanetComponentContent({
  title,
  size,
  orbitRadius: orbitRadiusDesktop,
  orbitRadiusMobile,
  orbitRadiusTablet,
  orbitDuration,
  hasSatellite,
}: PlanetComponentProps) {
  const randomRotation =
    typeof window !== "undefined" ? Math.random() * 360 : 0;
  const { isMobile, isTablet } = useBreakpoint();
  const orbitRadius = isTablet
    ? orbitRadiusTablet
    : isMobile
    ? orbitRadiusMobile
    : orbitRadiusDesktop;
  const orbit = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(${randomRotation}deg) translate(${orbitRadius}px) rotate(${-randomRotation}deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(${
      randomRotation + 360
    }deg) translate(${orbitRadius}px)
      rotate(${-randomRotation - 360}deg);
  }
`;
  return (
    <Box className="container">
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        top={{ base: "320px", md: "50vh" }}
        left={"50%"}
        animation={`${orbit} ${orbitDuration}s linear infinite`}
      >
        <Text
          whiteSpace={"nowrap"}
          textAlign={"center"}
          position={"absolute"}
          top={`${hasSatellite ? -32 : -24}px`}
          transform={"translate(0%, 0%)"}
          color={"#1C1C1C"}
          fontSize={"13px"}
          fontWeight={600}
          lineHeight={"21px"}
        >
          {title}
        </Text>

        {hasSatellite ? (
          <SatelliteComponent />
        ) : (
          <Image src={EarthIcon} alt="title" width={size} height={size} />
        )}
      </Flex>
      <Box
        position={"absolute"}
        top={{ base: "320px", md: "50vh" }}
        left={"50%"}
        width={orbitRadius * 2}
        height={orbitRadius * 2}
        border={"1px dashed rgba(28, 28, 28, 0.25)"}
        borderRadius={"50%"}
        transform={"translate(-50%, -50%)"}
      />
    </Box>
  );
}

const PlanetComponent = dynamic(() => Promise.resolve(PlanetComponentContent), {
  ssr: false,
});

export default PlanetComponent;
