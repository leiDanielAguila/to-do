import {
  Box,
  Container,
  HStack,
  Heading,
  useDisclosure,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Menu } from "@/components/menu";

export const Generate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box bg="green.50" minH="100vh">
      <Container maxW="7xl" py={8}>
        <VStack spacing={8} align={'stretch'}>
          <HStack justify={"space-between"} align={"center"}>
            <Heading size={"2xl"} color={"green.700"}>
              Best Task Order
            </Heading>
          </HStack>

          <HStack justify="space-between">
            <Button colorScheme="green" onClick={onOpen} ref={btnRef}>
              Menu
            </Button>
          </HStack>

          

          <Menu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </VStack>
      </Container>
    </Box>
  );
};
