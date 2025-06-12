"use client";
import { IntegrationListComponent } from "@/components/discover-page/IntegrationListComponent";
import { StackListComponent } from "@/components/discover-page/StackListComponent";
import { SUB_PRODUCT_CATEGORIES } from "@/consts/components";
import { Flex, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { SubProductDetailType } from "@/types/products";
import { useBreakpoint } from "@/hooks/breakpoint";
export const ProductListContainer: React.FC<{
  category: "all" | "stack" | "integration";
  item: string | null;
}> = ({ category, item }) => {
  const [integrationsToShow, setIntegrationsToShow] = useState<
    SubProductDetailType[]
  >([]);
  const { isMobile } = useBreakpoint();
  const [stacksToShow, setStacksToShow] = useState<SubProductDetailType[]>([]);
  const [currentIntegrationPage, setCurrentIntegrationPage] = useState(1);
  const [currentStackPage, setCurrentStackPage] = useState(1);

  const integrations = SUB_PRODUCT_CATEGORIES["integration"];
  const stacks = SUB_PRODUCT_CATEGORIES["stack"];
  const integrationCountPerPage = isMobile ? 6 : category === "all" ? 6 : 9;
  const stackCountPerPage = category === "all" ? 2 : 6;
  useEffect(() => {
    const filteredIntegrations = item
      ? integrations.filter((integration) => integration.subCategory === item)
      : integrations;
    setIntegrationsToShow(
      filteredIntegrations.slice(
        (currentIntegrationPage - 1) * integrationCountPerPage,
        currentIntegrationPage * integrationCountPerPage
      )
    );
  }, [item, currentIntegrationPage]);
  useEffect(() => {
    const filteredStacks = item
      ? stacks.filter((stack) => stack.subCategory === item)
      : stacks;
    setStacksToShow(
      filteredStacks.slice(
        (currentStackPage - 1) * stackCountPerPage,
        currentStackPage * stackCountPerPage
      )
    );
  }, [item, currentStackPage]);
  return (
    <Flex
      width={"100%"}
      flexDirection={"column"}
      gap={"39px"}
      alignItems={"center"}
    >
      <Flex flexDir={"column"} gap={"90px"} width={"100%"}>
        {(category === "all" || category === "stack") && (
          <Flex
            flexDir={"column"}
            gap={"39px"}
            alignItems={"center"}
            width={"100%"}
          >
            <StackListComponent category={category} stacks={stacksToShow} />
            {category === "stack" && (
              <PaginationRoot
                count={stacks.length}
                pageSize={stackCountPerPage}
                defaultPage={1}
                onPageChange={(page) => {
                  setCurrentStackPage(page.page);
                }}
              >
                <HStack>
                  <PaginationPrevTrigger />
                  <PaginationItems />
                  <PaginationNextTrigger />
                </HStack>
              </PaginationRoot>
            )}
          </Flex>
        )}
        {(category === "all" || category === "integration") && (
          <Flex flexDir={"column"} gap={"39px"} alignItems={"center"}>
            <IntegrationListComponent integrations={integrationsToShow} />
            <PaginationRoot
              count={integrations.length}
              pageSize={integrationCountPerPage}
              defaultPage={1}
              onPageChange={(page) => {
                setCurrentIntegrationPage(page.page);
              }}
            >
              <HStack>
                <PaginationPrevTrigger />
                <PaginationItems />
                <PaginationNextTrigger />
              </HStack>
            </PaginationRoot>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
