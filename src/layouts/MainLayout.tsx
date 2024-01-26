import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";

export default function MainLayout({ children }: any) {
  return (
    <Box backgroundColor={"#000000"}>
      <Box>
        {children}
        <Footer />
      </Box>
    </Box>
  );
}
