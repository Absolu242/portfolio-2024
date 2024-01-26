import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export function ProjectsSection() {
  return (
    <Box width={"100%"} paddingTop={"3rem"}>
      <Box className="center-layout">
        <Box textAlign={"center"} marginBottom={"5rem"}>
          <Heading
            fontFamily={"Calistoga"}
            fontSize={"50px"}
            letterSpacing={".2rem"}
          >
            Featured Projects
          </Heading>
        </Box>

        <Flex
          w={"100%"}
          h="100vh"
          justifyContent={"center"}
          wrap={"wrap"}
        >
          <Box
            w="46%"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
            backgroundImage="./socialmedia2.png"
            marginBottom={"2rem"}
          />
          <Box
            w="46%"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
            backgroundImage="./socialmedia2.png"
            marginBottom={"2rem"}
          />
          <Box
            w="46%"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
            backgroundImage="./socialmedia2.png"
          />
          <Box
            w="46%"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
            backgroundImage="./socialmedia2.png"
          />
        </Flex>
      </Box>
    </Box>
  );
}
