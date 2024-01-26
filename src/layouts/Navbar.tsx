import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box className="center-layout">
      <Flex justify={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"}>
          <Image
            src="./logo.png"
            alt="logo"
            width={"20px"}
            height={"20px"}
          />
          {/* <Text fontSize={"medium"}>Rahan Bakala</Text> */}
        </Flex>
        <Flex width="fit-content">
          <Link
            color={"white"}
            fontSize={"medium"}
            margin={"0 1rem"}
            _hover={{
              color: "#8CEF22",
            }}
          >
            Home
          </Link>
          <Link
            color={"white"}
            fontSize={"medium"}
            margin={"0 1rem"}
            _hover={{
              color: "#8CEF22",
            }}
          >
            Work
          </Link>
          <Link
            color={"white"}
            fontSize={"medium"}
            margin={"0 1rem"}
            _hover={{
              color: "#8CEF22",
            }}
          >
            Service
          </Link>
        </Flex>
        <Button
          borderRadius={"50"}
          padding={"2rem"}
          fontSize={"medium"}
          border={"1px solid white"}
          background={"none"}
          color="white"
          _hover={{ background: "#8CEF22" }}
        >
          Contact Me
        </Button>
      </Flex>
    </Box>
  );
}
