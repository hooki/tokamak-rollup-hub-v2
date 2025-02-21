import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      sm: "375px",
      md: "800px",
      lg: "1200px",
      xl: "1920px",
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
