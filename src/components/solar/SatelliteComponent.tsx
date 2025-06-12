import { Box, Flex } from "@chakra-ui/react";
import EarthIcon from "@/assets/atom.svg";
import Image from "next/image";
import { keyframes } from "@emotion/react";
const orbit = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg) translate(16px) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg) translate(16px)
      rotate(-360deg);
  }
`;
export default function SatelliteComponent() {
  return (
    <Flex>
      <Image src={EarthIcon} alt="earth" width={15} height={15} />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        animation={`${orbit} 2s linear infinite`}
      >
        <Image src={EarthIcon} alt="earth" width={5} height={5} />
      </Flex>
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        width={32}
        height={32}
        border={"1px solid rgba(28, 28, 28, 0.25)"}
        borderRadius={"50%"}
        transform={"translate(-50%, -50%)"}
      />
    </Flex>
  );
}
