import { PlanetComponentProps } from "@/types/planet";

export const PLANETS: PlanetComponentProps[] = [
  {
    title: "App chain",
    size: 12,
    orbitRadius: 200,
    orbitDuration: 10,
  },
  {
    title: "Ecosystem",
    size: 15,
    orbitRadius: 265,
    orbitDuration: 15,
    hasSatellite: true,
  },
  {
    title: "Protocol",
    size: 20,
    orbitRadius: 350,
    orbitDuration: 20,
  },
  {
    title: "Stack",
    size: 14,
    orbitRadius: 440,
    orbitDuration: 25,
  },
  {
    title: "Integration",
    size: 24,
    orbitRadius: 600,
    orbitDuration: 30,
  },
  {
    title: "SDK",
    size: 28,
    orbitRadius: 800,
    orbitDuration: 35,
  },
];
