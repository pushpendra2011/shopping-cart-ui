import {
    extendTheme,
    // theme as baseTheme,
  } from "@chakra-ui/react";
  
const colors = {
    primary: {
      100: "#E5FCF1",
      200: "#27EF96",
      300: "#10DE82",
      400: "#0EBE6F",
      500: "#c8d86d",
      600: "#0A864F",
      700: "#086F42",
      800: "#075C37",
      900: "#064C2E",
      150: "#558B2F",
      250: "#FFA000",
      350: "#546c2a",
      450: "#E9D014",
    },
  };
  
  const theme = extendTheme({ colors });
  
export default theme