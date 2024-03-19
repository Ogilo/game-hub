import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const conifg: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({ conifg });

export default theme;