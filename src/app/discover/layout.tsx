import { Flex } from "@chakra-ui/react";

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Flex>{children}</Flex>;
}
