import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Box className="center-layout">
      <Flex
        justify={"space-between"}
        alignItems={"center"}
        className="desktop-navbar"
      >
        <Flex alignItems={"center"}>
          <Image
            src="./logo.png"
            alt="logo"
            width={"20px"}
            height={"20px"}
          />
          {/* <Text fontSize={"medium"}>Rahan Bakala</Text> */}
        </Flex>
        <Flex marginLeft={"10.8rem"}>
          <Link
            color={"white"}
            fontSize={"medium"}
            margin={"0 2rem"}
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
            margin={"0 2rem"}
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
            margin={"0 2rem"}
            href="#services"
            _hover={{
              color: "#8CEF22",
            }}
          >
            Services
          </Link>
        </Flex>
        <a href="mailto:rahanbakala@outlook.com">
          <Button
            borderRadius={"50"}
            padding={"2rem"}
            fontSize={"medium"}
            background="#8CEF22"
            color="#000"
            border="1px solid #8CEF22"
            marginTop={"2rem"}
            _hover={{
              background: "none",
              color: "white",
              border: "1px solid #fff",
            }}
          >
            Work With Me
          </Button>
        </a>
      </Flex>

      <Box
        //justify={"space-between"}
        alignItems={"center"}
        className="mobile-navbar"
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image
            src="./logo.png"
            alt="logo"
            width={"20px"}
            height={"20px"}
          />
          {isClicked ? (
            <RxCross2
              size={"3rem"}
              color="#8CEF22"
              onClick={() =>
                setIsClicked((isClicked) => !isClicked)
              }
            />
          ) : (
            <IoMenu
              size={"3rem"}
              color="#8CEF22"
              onClick={() =>
                setIsClicked((isClicked) => !isClicked)
              }
            />
          )}
        </Flex>

        <Flex
          flexDirection={"column"}
          paddingTop={"2rem"}
          className={isClicked ? "show" : "hide"}
        >
          <Link
            color={"white"}
            fontSize={"medium"}
            padding={"1rem 0"}
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
            padding={"1rem 0"}
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
            padding={"1rem 0"}
            href="#services"
            _hover={{
              color: "#8CEF22",
            }}
          >
            Services
          </Link>
          <a href="mailto:rahanbakala@outlook.com">
            <Button
              margin={"1rem 0"}
              borderRadius={"50"}
              padding={"2rem"}
              fontSize={"medium"}
              border={"1px solid white"}
              background={"none"}
              color="white"
              _hover={{ background: "#8CEF22" }}
            >
              Work With Me
            </Button>
          </a>
        </Flex>
      </Box>
    </Box>
  );
}
