import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardBody,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";
import type { TodoFormData } from "../types/todo.types";
import { useRef } from "react";
import { Menu } from "@/components/menu";

export const Dashboard = () => {
  const {
    todos,
    pendingTodos,
    completedTodos,
    todosByPriority,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

  const handleAddTodo = (formData: TodoFormData) => {
    addTodo({
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      completed: false,
      dueDate: formData.dueDate
        ? new Date(formData.dueDate).toISOString()
        : undefined,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box bg="green.50" minH="100vh">
      <Container 
        maxW={{ base: "full", sm: "container.sm", md: "container.md", lg: "container.lg", xl: "7xl" }} 
        py={{ base: 4, md: 8 }}
        px={{ base: 4, md: 6 }}
      >
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
          {/* Header Section - Responsive Stack */}
          <Stack 
            direction={{ base: "column", md: "row" }} 
            justify="space-between" 
            align={{ base: "stretch", md: "center" }}
            spacing={{ base: 4, md: 0 }}
          >
            <Heading 
              size={{ base: "xl", md: "2xl" }} 
              color="green.700"
              textAlign={{ base: "center", md: "left" }}
            >
              Task Dashboard
            </Heading>
            <Box w={{ base: "full", md: "auto" }}>
              <TodoForm onSubmit={handleAddTodo} />
            </Box>
          </Stack>

          {/* Menu Button */}
          <HStack justify={{ base: "flex-start", md: "flex-start" }}>
            <Button colorScheme="green" onClick={onOpen} ref={btnRef}>
              Menu
            </Button>
          </HStack>

          <Menu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />

          {/* Stats Grid - Responsive Columns */}
          <Grid 
            templateColumns={{ 
              base: "repeat(2, 1fr)", 
              md: "repeat(4, 1fr)" 
            }} 
            gap={{ base: 3, md: 6 }}
          >
            <GridItem>
              <Card bg="white" boxShadow="sm" h="full">
                <CardBody p={{ base: 3, md: 6 }}>
                  <Stat>
                    <StatLabel 
                      color="green.600" 
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Total Tasks
                    </StatLabel>
                    <StatNumber 
                      color="green.700"
                      fontSize={{ base: "lg", md: "2xl" }}
                    >
                      {todos.length}
                    </StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card bg="white" boxShadow="sm" h="full">
                <CardBody p={{ base: 3, md: 6 }}>
                  <Stat>
                    <StatLabel 
                      color="green.600"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Pending
                    </StatLabel>
                    <StatNumber 
                      color="yellow.600"
                      fontSize={{ base: "lg", md: "2xl" }}
                    >
                      {pendingTodos.length}
                    </StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card bg="white" boxShadow="sm" h="full">
                <CardBody p={{ base: 3, md: 6 }}>
                  <Stat>
                    <StatLabel 
                      color="green.600"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Completed
                    </StatLabel>
                    <StatNumber 
                      color="green.600"
                      fontSize={{ base: "lg", md: "2xl" }}
                    >
                      {completedTodos.length}
                    </StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card bg="white" boxShadow="sm" h="full">
                <CardBody p={{ base: 3, md: 6 }}>
                  <Stat>
                    <StatLabel 
                      color="green.600"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      High Priority
                    </StatLabel>
                    <StatNumber 
                      color="red.500"
                      fontSize={{ base: "lg", md: "2xl" }}
                    >
                      {todosByPriority.high.length}
                    </StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>

          {/* Todo Lists Grid - Responsive Layout */}
          <Grid 
            templateColumns={{ 
              base: "1fr", 
              lg: "repeat(2, 1fr)" 
            }} 
            gap={{ base: 6, md: 8 }}
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
                todos={completedTodos}
                title="Completed Tasks"
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