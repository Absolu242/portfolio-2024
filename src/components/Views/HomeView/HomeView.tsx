import { Box } from "@chakra-ui/react";
import { HeroSection } from "../../../Components/Sections/Hero";
import { ProjectsSection } from "../../../Components/Sections/Projects";
import { ServicesSection } from "../../../Components/Services";
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
