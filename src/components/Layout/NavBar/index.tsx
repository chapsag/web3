import {
  useBreakpointValue,
  Box,
  Container,
  HStack,
  Flex,
  IconButton,
  ButtonGroup,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from '@chakra-ui/react';
import Logo from './Logo';
import { FiMenu } from 'react-icons/fi';

export const NavBar: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const items = ['Rejoins-nous', 'Sois-publiez', 'Annonces'];

  return (
    <Box as="section" pb={{ base: 12, md: 24 }}>
      <Box as="nav" boxShadow="sm">
        <Container py={{ base: '4', lg: '5' }} maxW="100%">
          <HStack spacing="10">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <Logo />
                <HStack spacing="3">
                  <ButtonGroup variant="link" spacing="8">
                    {items.map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                </HStack>
              </Flex>
            ) : (
              <Flex justify="space-between" flex="1">
                <Logo />
                <HStack spacing="3">
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<FiMenu />}
                      variant="outline"
                    />
                    <MenuList>
                      {items.map((item) => (
                        <MenuItem key={item}>{item}</MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </HStack>
              </Flex>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
