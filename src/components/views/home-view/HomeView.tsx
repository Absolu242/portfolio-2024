import { Box } from "@chakra-ui/react";
import { HeroSection } from "@src/components/sections/Hero";
import { ProjectsSection } from "@src/components/sections/Projects";
import { ServicesSection } from "@src/components/services";
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
