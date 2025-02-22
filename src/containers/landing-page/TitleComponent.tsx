import { Button, Flex, Text } from "@chakra-ui/react";
export default function TitleComponent() {
  return (
    <Flex
      flexDirection={"column"}
      gap={"30px"}
      width={{ base: "100%", md: "576px" }}
      position={{ base: "relative", md: "absolute" }}
      bottom={{ base: "0", md: "100px" }}
      left={{ base: "0", md: "90px" }}
    >
      <Flex flexDirection={"column"} gap={{ base: "12px", md: "18px" }}>
        <Text
          display={"flex"}
          flexDirection={"column"}
          fontSize={{ base: "30px", md: "54px" }}
          fontWeight={{ base: 700, md: 600 }}
          color={"#1C1C1C"}
          lineHeight={{ base: "36px", md: "66px" }}
          letterSpacing={{ base: "-0.81px", md: "-1.8px" }}
          textTransform={"uppercase"}
          textAlign={{ base: "center", md: "left" }}
        >
          L2 On-Demand{" "}
          <Text
            as={"span"}
            fontSize={{ base: "30px", md: "60px" }}
            letterSpacing={{ base: "-0.9px", md: "-1.8px" }}
          >
            Tailored Ethereum
          </Text>
        </Text>
        <Text
          display={"flex"}
          flexDir={"column"}
          fontSize={{ base: "13px", md: "20px" }}
          fontWeight={500}
          color={"#1C1C1C"}
          lineHeight={{ base: "normal", md: "27px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Explore and Deploy your On-Demand Appchain{" "}
          <Text as={"span"}>
            A Fast, Secure, and Fully Customizable L2 Appchain
          </Text>{" "}
        </Text>
      </Flex>
      <Flex gap={"15px"}>
        <Button
          w={"132px"}
          px={"15px"}
          py={"12px"}
          borderRadius={"23px"}
          fontSize={"14px"}
          fontWeight={"600px"}
          lineHeight={"21px"}
          textAlign={"center"}
          border={"2px solid #DFE4EE"}
          background={"rgba(255, 255, 255, 0.25)"}
          color={"#1C1C1C"}
          cursor={"pointer"}
        >
          Documents
        </Button>
        <Button
          w={"132px"}
          px={"15px"}
          py={"12px"}
          borderRadius={"23px"}
          fontSize={"14px"}
          fontWeight={"600px"}
          lineHeight={"21px"}
          border={"none"}
          textAlign={"center"}
          background={"#1C1C1C"}
          color={"#FFFFFF"}
          cursor={"pointer"}
        >
          Discover
        </Button>
      </Flex>
    </Flex>
  );
}
