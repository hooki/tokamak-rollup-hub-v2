"use client";
import { SubProductDetailType } from "@/types/products";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { StackComponent } from "./StackComponent";

export const StackListComponent: React.FC<{
  stacks: SubProductDetailType[];
}> = ({ stacks }) => {
  return (
    <Flex flexDir={"column"} gap={"39px"}>
      <Flex flexDir={"column"} gap={"10px"}>
        <Text
          fontSize={"30px"}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-0.9px"}
        >
          Stack
        </Text>
        <Text fontSize={"16px"} fontWeight={400} lineHeight={"20px"}>
          Meet the L2 Stack created by various developers.
        </Text>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={"30px"}>
        {stacks.map((stack) => (
          <GridItem key={stack.id}>
            <StackComponent {...stack} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
