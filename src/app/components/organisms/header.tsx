import Link from "next/link";
import { Box, Container, Heading } from "../atoms/my_chakra_components";

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
