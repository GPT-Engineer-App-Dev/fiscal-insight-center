import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <Stack direction="row" spacing={4}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Culture</Link>
          </Stack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Main Headline Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={4}>Main Headline</Heading>
            <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>

          {/* News Articles */}
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={2}>Article 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box bg="gray.100" p={4} mb={8}>
            <Heading as="h3" size="lg" mb={4}>Sidebar</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#">Link 1</Link>
              <Link href="#">Link 2</Link>
              <Link href="#">Link 3</Link>
              <Link href="#">Link 4</Link>
            </VStack>
          </Box>
          <Box bg="gray.100" p={4}>
            <Heading as="h3" size="lg" mb={4}>Advertisement</Heading>
            <Text>Ad content goes here.</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <Stack direction="row" spacing={4}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;