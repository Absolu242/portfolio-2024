import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "@src/layouts/Navbar";
import React from "react";

export function HeroSection() {
  return (
    <Box
      backgroundImage={"./hero-section.png"}
      backgroundRepeat={"no-repeat"}
      width={"100%"}
      //height={"100vh"}
      paddingTop={"3rem"}
      id="home"
    >
      <Box className="center-layout">
        <Navbar />

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          // height={"80vh"}
          flexDirection={"column"}
        >
          <Box
            padding={"7rem 0 5rem 0"}
            textAlign={"center"}
            alignContent={"center"}
            width={{
              base: "100%",
              md: "70%",
              lg: "55%",
            }}
          >
            <Text
              fontFamily={"Playfair Display, serif"}
              fontWeight={"bold"}
              lineHeight={{
                base: "2.5rem",
                md: "4rem",
                lg: "6rem",
              }}
              textAlign={"center"}
              paddingBottom={"2rem"}
              fontSize={{
                base: "2.5rem",
                md: "4rem",
                lg: "5.5rem",
              }}
            >
              {/* Building <br /> Softwares and Websites <br /> for{" "} */}
              <span className="green">Growing</span> Brands <br />
              With Web Development & <br /> Social Media Strategies
            </Text>

            <Text
              fontSize={{
                base: "1.3rem",
                md: "1.3rem",
                lg: "1.7rem",
              }}
              color={"#cccccc"}
            >
              I help brands expand their reach and boost their{" "}
              <br />
              presence by crafting effective social media
              strategies, <br /> softwares, and websites.
            </Text>

            <a href="mailto:rahanbakala@outlook.com">
              <Button
                borderRadius={"50"}
                padding={"2rem 3rem"}
                fontSize={"medium"}
                border={"1px solid #8CEF22"}
                background={"none"}
                margin={"2rem"}
                color="black"
                bg="#8CEF22"
                _hover={{
                  background: "none",
                  color: "white",
                  border: "1px solid #fff",
                }}
              >
                Work With Me
              </Button>
            </a>
          </Box>

          <Flex
            paddingBottom={" 5rem "}
            justifyContent={"space-evenly"}
            width={"100%"}
            wrap={"wrap"}
            alignItems={"center"}
          >
            <Flex
              justifyContent={"space-evenly"}
              width={{
                base: "100%",
                md: "70%",
                lg: "50%",
              }}
              wrap={"wrap"}
              alignItems={"center"}
            >
              <Image
                className="img-logo-style"
                src="./logos/vscode.png"
                alt="logo"
                margin={"0 1rem"}
              />
              <Image
                src="./logos/Linkedin.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
                // width={"3rem"}
              />
              <Image
                src="./logos/Webflow.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
              <Image
                src="./logos/nextjs.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
              <Image
                src="./logos/Figma.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
                width={"3rem"}
              />
            </Flex>

            <Flex
              justifyContent={"space-evenly"}
              width={{
                base: "100%",
                md: "70%",
                lg: "50%",
              }}
              wrap={"wrap"}
              alignItems={"center"}
            >
              <Image
                src="./logos/react.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
              <Image
                src="./logos/html.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
              <Image
                src="./logos/typescript.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
              <Image
                src="./logos/Shopify.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
              <Image
                src="./logos/facebook.png"
                className="img-logo-style"
                alt="logo"
                margin={" 1rem"}
              />
            </Flex>
          </Flex>

          <Box position="relative" width="100%" height="100%">
            <Image
              src="./saasdunk.png"
              width="1220px"
              alt="profile"
              //borderRadius={"50%"}
              className="img-style"
            />
          </Box>
        </Flex>
      </Box>
      {/* <Banner /> */}
    </Box>
  );
}
