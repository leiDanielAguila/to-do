export interface Todo {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  dueDate?: Date
}

export interface TodoFormData {
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
}