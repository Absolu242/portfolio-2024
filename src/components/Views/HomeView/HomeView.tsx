import { Box } from "@chakra-ui/react";
import { HeroSection } from "@src/Components/Sections/Hero";
import { ProjectsSection } from "@src/Components/Sections/Projects";
import { ServicesSection } from "@src/Components/Services";
import React from "react";

export function HomeView() {
  return (
    <Box>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
    </Box>
  );
}
