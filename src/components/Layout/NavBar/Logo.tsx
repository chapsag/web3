import { Box, Image, Text } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Box
      as="a"
      href="/"
      fontSize="lg"
      fontWeight="bold"
      color="text"
      display={'flex'}
      alignItems={'center'}
    >
      <Image
        src="assets/png/logo.png"
        boxSize="35px"
        objectFit="cover"
        alt="web3 learning"
      />
      <Text fontSize="lg" fontWeight="bold" color="text" ml={2}>
        web3 learning
      </Text>
    </Box>
  );
};

export default Logo;
