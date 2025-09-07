export interface Todo {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  dueDate?: string
  dueTime?: number
  order?: number
}

export interface TodoFormData {
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  dueTime: number
}

export interface TimePickerHookReturn {
  // 12-hour format state
  selectedHour: string;
  selectedMinute: string;
  selectedPeriod: 'AM' | 'PM';
  
  // Setters
  setSelectedHour: (hour: string) => void;
  setSelectedMinute: (minute: string) => void;
  setSelectedPeriod: (period: 'AM' | 'PM') => void;
  
  // Utility functions
  getDisplayTime: () => string;
  get24HourTime: () => string;
  setTimeFrom24Hour: (time24: string) => void;
  setTimeFrom12Hour: (hour: string, minute: string, period: 'AM' | 'PM') => void;
  resetTime: () => void;
}
export interface TimeInputProps {
  value?: string;
  onChange?: (time: string) => void;
  placeholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
}