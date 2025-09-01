import { VStack, Text, Box } from '@chakra-ui/react'
import type { Todo } from '../types/todo.types'
import { TodoCard } from './TodoCard'

interface TodoListProps {
  todos: Todo[]
  title: string
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export const TodoList = ({ todos, title, onToggle, onDelete }: TodoListProps) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" color="green.700" mb={4}>
        {title} ({todos.length})
      </Text>
      {todos.length === 0 ? (
        <Text color="gray.500" textAlign="center" py={8}>
          No tasks found
        </Text>
      ) : (
        <VStack spacing={3} align="stretch">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </VStack>
      )}
    </Box>
  )
}