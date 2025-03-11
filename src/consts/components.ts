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
      id: "thanos-stack",
      name: "Thanos Stack",
      description:
        "A customized fork of the OP Stack that enables ERC20 tokens as the native currency for the L2 chain.",
      link: "https://github.com/thanos-labs/thanos",
      category: "stack",
    },
    // {
    //   id: "zk-stack",
    //   name: "ZK Stack",
    //   description:
    //     "An advanced virtual machine for Layer 2, optimized for compatibility with ZKSNARKS. It features an innovative L2 rollup architecture that reduces computational complexity while preserving security and privacy.",
    //   link: "https://github.com/thanos-labs/thanos",
    //   category: "stack",
    // },
  ],
  integration: [
    {
      id: "block-explorer",
      name: "Block Explorer",
      description:
        "A tool for exploring and searching the L2 networks for transactions, blocks, and other network activity.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    {
      id: "thanos-bridge",
      name: "Thanos Bridge",
      description:
        "Thanos Bridge allows users to transfer assets between your deployed chain and L1. It supports a number of assets including TON, ETH, USDC and integrates quickly for seamless usability.",
      link: "https://github.com/thanos-labs/thanos",
      category: "integration",
    },
    // {
    //   id: "earn-ton-as-reward",
    //   name: "Earn TON as Reward",
    //   description:
    //     "Register your chain as a DAO candidate in the Tokamak Network ecosystem to earn seigniorage rewards proportional to the L2 growth.",
    //   link: "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#222-ton-staking-v2",
    //   category: "integration",
    // },
    // {
    //   id: "random-number-generation",
    //   name: "Random Number Generation",
    //   description:
    //     "Integrate random number generation into your chain with our RNG project.",
    //   link: "https://github.com/thanos-labs/thanos",
    //   category: "integration",
    // },
    // {
    //   id: "cross-chain-swap",
    //   name: "Cross Chain Swap",
    //   description:
    //     "Cross-Trade enables fast, decentralized withdrawals between L2 and L1 chains, as well as L2-L2 transfers",
    //   link: "https://ethresear.ch/t/canonical-cross-chain-swap-fast-and-decentralized-settlement-for-cross-chain-swap-using-canonical-native-l1-l2-messaging/21638/3",
    //   category: "integration",
    // },
    // {
    //   id: "sybil-resistance",
    //   name: "Sybil Resistance",
    //   description:
    //     "Creating an identity-proving algorithm and zk-rollup network for user identification.",
    //   link: "https://tokamak.notion.site/Tokamak-Sybil-Resistance-Overview-03cc941223844f30ba4473e98b1275a7",
    //   category: "integration",
    // },
  ],
};
