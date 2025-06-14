import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "375px",
      md: "800px",
      lg: "1200px",
      xl: "1680px",
      "2xl": "1920px",
    },
  },
})

export const system = createSystem(defaultConfig, config)