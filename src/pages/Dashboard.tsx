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
  StatHelpText,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { useTodos } from '../hooks/useTodos'
import type { TodoFormData } from '../types/todo.types'

export const Dashboard = () => {
  const {
    todos,
    pendingTodos,
    completedTodos,
    todosByPriority,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos()

  const handleAddTodo = (formData: TodoFormData) => {
    addTodo({
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      completed: false,
      dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined,
    })
  }

  return (
    <Box bg="green.50" minH="100vh">
      <Container maxW="7xl" py={8}>
        <VStack spacing={8} align="stretch">
          <HStack justify="space-between" align="center">
            <Heading size="2xl" color="green.700">
              Task Dashboard
            </Heading>
            <TodoForm onSubmit={handleAddTodo} />
          </HStack>

          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <GridItem>
              <Card bg="white" boxShadow="sm">
                <CardBody>
                  <Stat>
                    <StatLabel color="green.600">Total Tasks</StatLabel>
                    <StatNumber color="green.700">{todos.length}</StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card bg="white" boxShadow="sm">
                <CardBody>
                  <Stat>
                    <StatLabel color="green.600">Pending</StatLabel>
                    <StatNumber color="yellow.600">{pendingTodos.length}</StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card bg="white" boxShadow="sm">
                <CardBody>
                  <Stat>
                    <StatLabel color="green.600">Completed</StatLabel>
                    <StatNumber color="green.600">{completedTodos.length}</StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card bg="white" boxShadow="sm">
                <CardBody>
                  <Stat>
                    <StatLabel color="green.600">High Priority</StatLabel>
                    <StatNumber color="red.500">{todosByPriority.high.length}</StatNumber>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
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
  )
}