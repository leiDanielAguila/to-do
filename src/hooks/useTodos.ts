import { useTodoStore } from "@/store/todoStore"

export const useTodos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodoStore()

  const completedTodos = todos.filter((todo) => todo.completed)
  const pendingTodos = todos.filter((todo) => !todo.completed)
  
  const todosByPriority = {
    high: todos.filter((todo) => todo.priority === 'high' && !todo.completed),
    medium: todos.filter((todo) => todo.priority === 'medium' && !todo.completed),
    low: todos.filter((todo) => todo.priority === 'low' && !todo.completed),
  }

  return {
    todos,
    completedTodos,
    pendingTodos,
    todosByPriority,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  }
}