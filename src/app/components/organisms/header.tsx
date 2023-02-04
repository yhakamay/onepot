"use client";

import { Box, Container, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Box as="section" pb={{ base: "4", md: "8" }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "3", lg: "4" }}>
          <Link href="/">
            <Heading size="lg">OnePot</Heading>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
