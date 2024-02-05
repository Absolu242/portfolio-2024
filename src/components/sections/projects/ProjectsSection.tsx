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
import { projectsList } from "../../../data/projects.data";

export function ProjectsSection() {
  return (
    <Box
      width={"100%"}
      paddingTop={{
        base: "5rem",
        md: "8rem",
        lg: "15rem",
      }}
      id="work"
    >
      <Box className="center-layout">
        <Box textAlign={"center"} marginBottom={"5rem"}>
          <Heading
            //fontFamily={"Calistoga"}
            fontFamily={"Playfair Display, serif"}
            fontWeight={"bold"}
            fontSize={{
              base: "2.5rem",
              md: "4rem",
              lg: "5.5rem",
            }}
            letterSpacing={".2rem"}
          >
            Featured Projects
          </Heading>
        </Box>

        <Flex
          w={"100%"}
          //  h="100vh"
          justifyContent={"center"}
          wrap={"wrap"}
        >
          {projectsList.map((project: any, index) => {
            return (
              <Image
                src={project.image}
                alt={project.name}
                borderRadius="10px"
                className="project-card"
                key={index}
              />
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}
