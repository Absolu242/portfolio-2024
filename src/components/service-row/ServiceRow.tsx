import { Box, Flex, Button, Text } from "@chakra-ui/react";

import React from "react";

export function ServiceRow({ service, hideBorder }: any) {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      paddingBottom={"3rem"}
      borderBottom={
        hideBorder === false ? "0.1px solid #ccc" : "none"
      }
      h={"100%"}
      marginBottom={"3rem"}
      alignItems={"center"}
    >
      <Box>
        <Text
          fontFamily={"Calistoga"}
          fontSize={{
            base: "1.8rem",
            md: "2.5rem",
            lg: "3rem",
          }}
        >
          {service.name}
        </Text>
        <Text color="#ccc" fontSize={"1.1rem"}>
          {service.tools}
        </Text>
        <Text
          color="#8CEF22"
          fontSize={"1.5rem"}
          paddingTop={"1rem"}
        >
          {service.price}
        </Text>
      </Box>

      <a href={service.link} target="_blank">
        <Button
          borderRadius={"50"}
          padding={"2rem"}
          //fontSize={"medium"}
          fontSize={{
            base: "small",
            md: "small",
            lg: "medium",
          }}
          border={"1px solid white"}
          background={"none"}
          color="white"
          _hover={{
            background: "#8CEF22",
            color: "#000",
            border: "1px solid #8CEF22",
          }}
        >
          Get Started
        </Button>
      </a>
    </Flex>
  );
}
