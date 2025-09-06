import {
  Box,
  Text,
  Checkbox,
  Badge,
  IconButton,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import type { Todo } from '../types/todo.types'

interface TodoCardProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const priorityColors = {
  high: 'red',
  medium: 'yellow',
  low: 'green',
}

export const TodoCard = ({ todo, onToggle, onDelete }: TodoCardProps) => {

  return (
    <Box
      p={4}
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      border="1px"
      borderColor="green.100"
      _hover={{ boxShadow: 'md', borderColor: 'green.200' }}
      transition="all 0.2s"
    >
      <HStack justify="space-between" align="start">
        <VStack align="start" flex="1" spacing={2}>
          <HStack>
            <Checkbox
              colorScheme="green"
              isChecked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <Text
              fontSize="lg"
              fontWeight="medium"
              textDecoration={todo.completed ? 'line-through' : 'none'}
              color={todo.completed ? 'gray.500' : 'gray.800'}
            >
              {todo.title}
            </Text>
            <Badge colorScheme={priorityColors[todo.priority]} size="sm">
              {todo.priority}
            </Badge>                    
            <Text
              fontSize="lg"
              fontWeight="medium"
              textDecoration={todo.completed ? 'line-through' : 'none'}
              color={todo.completed ? 'gray.500' : 'gray.800'}
            >
              {todo.dueTime}
            </Text>
          </HStack>
          
          {todo.description && (
            <Text
              fontSize="sm"
              color="gray.600"
              textDecoration={todo.completed ? 'line-through' : 'none'}
            >
              {todo.description}
            </Text>
          )}
          
          {todo.dueDate && (
            <Text fontSize="xs" color="green.600">
              Due: {new Date(todo.dueDate).toLocaleDateString()}
            </Text>
          )}
        </VStack>
        
        <IconButton
          aria-label="Delete todo"
          icon={<DeleteIcon />}
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={() => onDelete(todo.id)}
        />
      </HStack>
    </Box>
  )
}