import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import {
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
} from "../atoms/my_chakra_components";

export default function Header() {
  return (
    <Box as="section" pb={{ base: "4", md: "8" }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "3", lg: "4" }}>
          <HStack justify="space-between">
            <Link href="/">
              <Heading size="lg">OnePot</Heading>
            </Link>
            <Link
              href={"https://github.com/yhakamay/onepot"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                variant="link"
                icon={<BsGithub />}
                aria-label={"github"}
              />
            </Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
