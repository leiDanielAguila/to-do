import {
  Box,
  Container,
  HStack,
  Heading,
  useDisclosure,
  Button,
  VStack,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Menu } from "@/components/menu";
import { useTodos } from "../hooks/useTodos";
import { TodoList } from "@/components/TodoList";

export const Generate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const { todos, pendingTodos, todoBestOrder, toggleTodo, deleteTodo } =
    useTodos();

  return (
    <Box bg="green.50" minH="100vh">
      <Container maxW="7xl" py={8}>
        <VStack spacing={8} align={"stretch"}>
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
          <Center>
            <Button variant={"solid"} colorScheme="green">
              Generate Task Order
            </Button>
          </Center>

          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={{ base: 3, md: 6 }}
          >
            <GridItem>
              <TodoList
                todos={pendingTodos}
                title="Pending Tasks"
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </GridItem>
            <GridItem>
              <TodoList
                todos={todoBestOrder}
                title="Best Order"
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};
