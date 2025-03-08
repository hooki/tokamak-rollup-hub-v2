export const PRODUCT_CATEGORIES = [
  {
    id: "all",
    name: "View all",
  },
  {
    id: "stack",
    name: "Stack",
  },
  {
    id: "integration",
    name: "Integration",
  },
];

export const SUB_PRODUCT_CATEGORIES: Record<
  string,
  { id: string; name: string }[]
> = {
  all: [],
  stack: [
    {
      id: "thanos",
      name: "Thanos",
    },
    {
      id: "zk-rollup",
      name: "ZK-Rollup",
    },
  ],
  integration: [
    {
      id: "block-explorer",
      name: "Block Explorer",
    },
    {
      id: "bridge",
      name: "Bridge",
    },
    {
      id: "security",
      name: "Security",
    },
  ],
};
