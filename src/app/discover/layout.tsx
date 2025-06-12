import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Flex>Loading...</Flex>}>
      <Flex>{children}</Flex>
    </Suspense>
  );
}
