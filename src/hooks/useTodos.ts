import { useTodoStore } from "@/store/todoStore";
import { useState, useEffect } from "react";
import type { TimePickerHookReturn } from "@/types/todo.types";

export const useTodos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodoStore();

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);
  const todoBestOrder = todos
    .filter((todo) => todo !== undefined && !todo.completed)
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));

  const todosByPriority = {
    high: todos.filter((todo) => todo.priority === "high" && !todo.completed),
    medium: todos.filter(
      (todo) => todo.priority === "medium" && !todo.completed
    ),
    low: todos.filter((todo) => todo.priority === "low" && !todo.completed),
  };

  return {
    todos,
    completedTodos,
    todoBestOrder,
    pendingTodos,
    todosByPriority,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  };
};

export const useTimePicker = (initialTime?: string): TimePickerHookReturn => {
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");

  // Initialize with provided time if available
  useEffect(() => {
    if (initialTime) {
      setTimeFrom24Hour(initialTime);
    }
  }, [initialTime]);

  const getDisplayTime = (): string => {
    return `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
  };

  const get24HourTime = (): string => {
    let hour24 = parseInt(selectedHour);
    if (selectedPeriod === "AM" && hour24 === 12) {
      hour24 = 0;
    } else if (selectedPeriod === "PM" && hour24 !== 12) {
      hour24 += 12;
    }
    return `${hour24.toString().padStart(2, "0")}:${selectedMinute}`;
  };

  const setTimeFrom24Hour = (time24: string): void => {
    const [hours, minutes] = time24.split(":");
    let hour = parseInt(hours);
    const period: "AM" | "PM" = hour >= 12 ? "PM" : "AM";

    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }

    setSelectedHour(hour.toString().padStart(2, "0"));
    setSelectedMinute(minutes || "00");
    setSelectedPeriod(period);
  };

  const setTimeFrom12Hour = (
    hour: string,
    minute: string,
    period: "AM" | "PM"
  ): void => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    setSelectedPeriod(period);
  };

  const resetTime = (): void => {
    setSelectedHour("12");
    setSelectedMinute("00");
    setSelectedPeriod("AM");
  };

  return {
    selectedHour,
    selectedMinute,
    selectedPeriod,
    setSelectedHour,
    setSelectedMinute,
    setSelectedPeriod,
    getDisplayTime,
    get24HourTime,
    setTimeFrom24Hour,
    setTimeFrom12Hour,
    resetTime,
  };
};
