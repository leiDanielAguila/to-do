import React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import type { TimeInputProps } from '@/types/todo.types';

export const TimeInput: React.FC<TimeInputProps> = ({
  value = '',
  onChange,
  placeholder = "HH:MM",
  label = "Enter Time",
  size = 'md',
  isDisabled = false,
}) => {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Remove any non-digit characters except colon
    inputValue = inputValue.replace(/[^\d:]/g, "");

    // Auto-format as user types
    if (inputValue.length === 2 && !inputValue.includes(":")) {
      inputValue = inputValue + ":";
    }

    // Limit to HH:MM format
    if (inputValue.length <= 5) {
      onChange?.(inputValue);
    }
  };

  const handleBlur = () => {
    // Validate and format on blur
    const parts = value.split(":");
    if (parts.length === 2) {
      const hours = parseInt(parts[0]) || 0;
      const minutes = parseInt(parts[1]) || 0;

      if (hours <= 23 && minutes <= 59) {
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`;
        onChange?.(formattedTime);
      }
    }
  };

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup size={size}>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleTimeChange}
          onBlur={handleBlur}
          maxLength={5}
          isDisabled={isDisabled}
          _focus={{
            borderColor: 'blue.500',
            boxShadow: '0 0 0 1px blue.500',
          }}
        />
        <InputRightElement>
          <TimeIcon color="gray.400" />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
