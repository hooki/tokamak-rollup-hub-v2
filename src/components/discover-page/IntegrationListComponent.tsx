import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import type { IntegrationDetailType } from "@/types/products";
import { IntegrationComponent } from "./IntegrationComponent";

export const IntegrationListComponent: React.FC<{
  integrations: IntegrationDetailType[];
}> = ({ integrations }) => {
  return (
    <Flex flexDir={"column"} gap={"39px"} zIndex={100} w="100%">
      <Flex flexDir={"column"} gap={"10px"}>
        <Text
          fontSize={"30px"}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-0.9px"}
        >
          Integration
        </Text>
        <Text fontSize={"16px"} fontWeight={400} lineHeight={"20px"} color={"#71717a"}>
          Integrate with other projects.
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: `repeat(${integrations.length > 3 ? 3 : integrations.length}, 1fr)`,
        }}
        gap={"30px"}
      >
        {integrations.map((integration) => (
          <GridItem key={integration.id}>
            <IntegrationComponent {...integration} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
