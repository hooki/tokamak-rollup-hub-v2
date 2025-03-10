import { ProductDetailType, SubProductDetailType } from "@/types/products";

export const PRODUCT_CATEGORIES: ProductDetailType[] = [
  {
    id: "all",
    name: "View all",
    description: "View all products",
  },
  {
    id: "stack",
    name: "Stack",
    description: "Meet the L2 Stack created by various developers.",
  },
  {
    id: "integration",
    name: "Integration",
    description: "Integrate with other projects.",
  },
];

export const SUB_PRODUCT_CATEGORIES: Record<string, SubProductDetailType[]> = {
  all: [],
  stack: [
    {
      id: "thanos",
      name: "Thanos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "stack",
    },
    {
      id: "lightweight-stack",
      name: "Lightweight Stack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "stack",
    },
  ],
  integration: [
    {
      id: "block-explorer",
      name: "Block Explorer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "bridge",
      name: "Bridge",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "security",
      name: "Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "random-number-generator",
      name: "Random Number Generator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "cross-chain-swap",
      name: "Cross Chain Swap",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "sybil-resistance",
      name: "Sybil Resistance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "zero-knowledge-proof",
      name: "Zero-knowledge Proof",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
  ],
};
