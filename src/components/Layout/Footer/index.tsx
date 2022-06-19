import { Container, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Container as="footer" py={{ base: 12, md: 16 }}>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} made with &#10084;&#65039; by
        Pierre-Emmanuel Goffi. All rights reserved.
      </Text>
    </Container>
  );
};
