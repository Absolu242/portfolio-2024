import { Box, Image, Text } from "@chakra-ui/react";
import Navbar from "@src/layouts/Navbar";
import React from "react";

export function HeroSection() {
  return (
    <Box
      backgroundImage={"./hero-section.png"}
      backgroundRepeat={"no-repeat"}
      width={"100%"}
      height={"100vh"}
      paddingTop={"3rem"}
    >
      <Box className="center-layout">
        <Navbar />
        {/* <Image
          src="pattern.jpg"
          alt="pattern"
          width="100%"
          height={"300px"}
          borderRadius={"50px"}
        /> */}
      </Box>
    </Box>
  );
}
