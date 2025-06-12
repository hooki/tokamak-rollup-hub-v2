"use client";
import { ProductCategoryType, SubProductDetailType } from "@/types/products";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { StackComponent } from "./StackComponent";

export const StackListComponent: React.FC<{
  category: ProductCategoryType;
  stacks: SubProductDetailType[];
}> = ({ stacks }) => {
  return (
    <Flex
      flexDir={"column"}
      gap={"39px"}
      zIndex={100}
      className="stack-list"
      width={"100%"}
    >
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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={"30px"}
      >
        {stacks.map((stack) => (
          <GridItem key={stack.id}>
            <StackComponent {...stack} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
