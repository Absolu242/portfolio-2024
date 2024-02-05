import { Box } from "@chakra-ui/react";
import Banner from "@src/components/Banner";
import { HeroSection } from "@src/components/sections/Hero";
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
