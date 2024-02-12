import { Box } from "@chakra-ui/react";
import { HeroSection } from "@src/components/sections/hero";
import { ProjectsSection } from "@src/components/sections/projects";
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
