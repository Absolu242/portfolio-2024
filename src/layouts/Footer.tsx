import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri";

export function Footer() {
  return (
    <Box width={"100%"} paddingTop={"15rem"}>
      <Box className="center-layout">
        <Box textAlign={"center"} marginBottom={"5rem"}>
          <Heading
            fontFamily={"Calistoga"}
            fontSize={"50px"}
            letterSpacing={".2rem"}
          >
            {`  Let's Collaborate`}
          </Heading>

          <Button
            borderRadius={"50"}
            padding={"2rem"}
            fontSize={"medium"}
            background="#8CEF22"
            color="#000"
            border="1px solid #8CEF22"
            marginTop={"2rem"}
          >
            Work With Me
          </Button>
        </Box>

        <Flex
          width="100%"
          justifyContent={"center"}
          marginBottom={"2rem"}
        >
          <Link
            color={"white"}
            fontSize={"medium"}
            margin={"0 1rem"}
            href="#home"
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
            href="#work"
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
            href="#services"
            _hover={{
              color: "#8CEF22",
            }}
          >
            Services
          </Link>
        </Flex>

        <Flex
          w={"100%"}
          h="20vh"
          justifyContent={"center"}
          wrap={"wrap"}
        >
          <a
            href="https://www.linkedin.com/in/therahanbakala/"
            className="footer-link"
          >
            <RiLinkedinBoxFill
              color="#fff"
              size="2rem"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/therahanbakala/"
            className="footer-link"
          >
            <RiInstagramFill
              color="#fff"
              size="2rem"
              className="footer-icon"
            />
          </a>
          <a
            href="https://twitter.com/therahanbakala"
            className="footer-link"
          >
            <RiTwitterXLine
              color="#fff"
              size="2rem"
              className="footer-icon"
            />
          </a>
          <a
            href="https://wa.me/message/EYR7BL5DSXT6G1"
            className="footer-link"
          >
            <RiWhatsappLine
              color="#fff"
              size="2rem"
              className="footer-icon"
            />
          </a>
        </Flex>
      </Box>
    </Box>
  );
}
