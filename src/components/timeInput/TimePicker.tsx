import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Select,
  Text,
  FormControl,
  FormLabel,
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { TimeIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useTimePicker } from '@/hooks/useTodos';

export interface TimePickerProps {
  value?: string; // 24-hour format (HH:MM)
  onChange?: (time: string) => void; // Returns 24-hour format
  placeholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  showQuickSelect?: boolean;
  quickSelectTimes?: string[];
}

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  placeholder = "Select time",
  label = "Select Time",
  size = 'md',
  isDisabled = false,
  showQuickSelect = true,
  quickSelectTimes = ['09:00', '12:00', '15:00', '18:00'],
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timePicker = useTimePicker(value);

  // Generate hours (1-12 for 12-hour format)
  const hours = Array.from({ length: 12 }, (_, i) => 
    (i + 1).toString().padStart(2, '0')
  );

  // Generate minutes (00-59)
  const allMinutes = Array.from({ length: 60 }, (_, i) => 
    i.toString().padStart(2, '0')
  );

  const periods: ('AM' | 'PM')[] = ['AM', 'PM'];

  const handleTimeSelect = () => {
    const time24 = timePicker.get24HourTime();
    onChange?.(time24);
    onClose();
  };

  const handleQuickSelect = (time: string) => {
    timePicker.setTimeFrom24Hour(time);
    onChange?.(time);
  };

  const displayValue = value || timePicker.getDisplayTime();

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement="bottom-start">
        <PopoverTrigger>
          <Box>
            <InputGroup size={size}>
              <Input
                value={displayValue}
                readOnly
                cursor="pointer"
                placeholder={placeholder}
                isDisabled={isDisabled}
                _hover={{ borderColor: 'blue.300' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
              />
              <InputRightElement>
                <HStack spacing={1}>
                  <TimeIcon color="gray.400" />
                  <ChevronDownIcon color="gray.400" />
                </HStack>
              </InputRightElement>
            </InputGroup>
          </Box>
        </PopoverTrigger>
        
        <PopoverContent width="280px">
          <PopoverArrow />
          <PopoverBody p={4}>
            <VStack spacing={4}>
              <Text fontWeight="semibold" color="gray.700">
                Select Time
              </Text>
              
              <HStack spacing={2} width="full">
                <VStack spacing={1} flex={1}>
                  <Text fontSize="sm" color="gray.600">Hour</Text>
                  <Select
                    value={timePicker.selectedHour}
                    onChange={(e) => timePicker.setSelectedHour(e.target.value)}
                    size="sm"
                  >
                    {hours.map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </Select>
                </VStack>

                <VStack spacing={1} flex={1}>
                  <Text fontSize="sm" color="gray.600">Min</Text>
                  <Select
                    value={timePicker.selectedMinute}
                    onChange={(e) => timePicker.setSelectedMinute(e.target.value)}
                    size="sm"
                  >
                    {allMinutes.map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </Select>
                </VStack>

                <VStack spacing={1} flex={0.8}>
                  <Text fontSize="sm" color="gray.600">Period</Text>
                  <Select
                    value={timePicker.selectedPeriod}
                    onChange={(e) => timePicker.setSelectedPeriod(e.target.value as 'AM' | 'PM')}
                    size="sm"
                  >
                    {periods.map((period) => (
                      <option key={period} value={period}>
                        {period}
                      </option>
                    ))}
                  </Select>
                </VStack>
              </HStack>

              {showQuickSelect && (
                <VStack spacing={2} width="full">
                  <Text fontSize="sm" color="gray.600">Quick Select</Text>
                  <HStack spacing={1} flexWrap="wrap" justify="center">
                    {quickSelectTimes.map((time) => (
                      <Button
                        key={time}
                        size="xs"
                        variant="outline"
                        onClick={() => handleQuickSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </HStack>
                </VStack>
              )}

              <HStack spacing={2} width="full">
                <Button size="sm" variant="ghost" onClick={onClose} flex={1}>
                  Cancel
                </Button>
                <Button size="sm" colorScheme="blue" onClick={handleTimeSelect} flex={1}>
                  Select
                </Button>
              </HStack>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </FormControl>
  );
};
