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
import { ServiceRow } from "../service-row";

export function ServicesSection() {
  type service = {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        >
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    price:
      | string
      | number
      | boolean
      | React.ReactElement<
          any,
          string | React.JSXElementConstructor<any>
        >
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    link: string;
    tools: string;
  };

  const servicesList: Array<service> = [
    {
      name: "Website Design",
      price: "Starting at $3800",
      link: "https://google.com",
      tools: "Webflow , Framer , Shopify",
    },
    {
      name: "Social Media Design",
      price: "Starting at $1800 per month",
      link: "https://google.com",
      tools: "Banners , Content Creation , etc",
    },
    {
      name: "Custom Web Development",
      price: "Contact for pricing",
      link: "https://google.com",
      tools: "Html , React , Next, etc",
    },
    {
      name: "Social Media Management / Marketing",
      price: "Starting at $2500 per month",
      link: "https://google.com",
      tools: "LinkedIn , Instagram , Facebook , etc",
    },
    {
      name: "Remote Frontend Developer",
      price: "Contact for pricing",
      link: "https://google.com",
      tools: "",
    },
  ];

  return (
    <Box width={"100%"} paddingTop={"15rem"}>
      <Box className="center-layout">
        <Box textAlign={"center"} marginBottom={"5rem"}>
          <Heading
            fontFamily={"Calistoga"}
            fontSize={"5rem"}
            letterSpacing={".2rem"}
          >
            Services
          </Heading>
        </Box>

        <Box w={"100%"}>
          {servicesList.map((service: service, index: number) => {
            let c = index + 1 == servicesList.length;

            return (
              <ServiceRow
                hideBorder={c}
                key={index}
                service={service}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
