import { PlanetComponentProps } from "@/types/planet";

export const PLANETS: PlanetComponentProps[] = [
  {
    title: "App chain",
    size: 12,
    orbitRadius: 200,
    orbitRadiusTablet: 100,
    orbitRadiusMobile: 67,
    orbitDuration: 10,
  },
  {
    title: "Ecosystem",
    size: 15,
    orbitRadius: 265,
    orbitRadiusTablet: 133,
    orbitRadiusMobile: 88,
    orbitDuration: 15,
    hasSatellite: true,
  },
  {
    title: "Protocol",
    size: 20,
    orbitRadius: 350,
    orbitRadiusTablet: 175,
    orbitRadiusMobile: 117,
    orbitDuration: 20,
  },
  {
    title: "Stack",
    size: 14,
    orbitRadius: 440,
    orbitRadiusTablet: 220,
    orbitRadiusMobile: 147,
    orbitDuration: 25,
  },
  {
    title: "Integration",
    size: 24,
    orbitRadius: 600,
    orbitRadiusTablet: 300,
    orbitRadiusMobile: 200,
    orbitDuration: 30,
  },
  {
    title: "SDK",
    size: 28,
    orbitRadius: 800,
    orbitRadiusTablet: 400,
    orbitRadiusMobile: 267,
    orbitDuration: 35,
  },
];
