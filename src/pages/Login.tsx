import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  Heading,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { SampleLogin } from "@/hooks/LoginHook";
import type { LoginForm } from "@/types/LoginPage.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const { validateLogin, error, isLoading } = SampleLogin(loginForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateLogin();
  };

  const handleCancel = () => {
    setLoginForm({ username: "", password: "" });
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      minH="100vh"
      gap={{ base: 6, md: 10 }}
      p={4}
      bg="green.50"
    >
      {/* Card section */}
      <Card
        w={{ base: "full", md: "sm" }}
        variant="elevated"
        shadow="md"
        bg="white"
      >
        <CardHeader>
          <Heading size="lg" color="green.600">
            Log In
          </Heading>
          <Text color="gray.600" mt={2}>
            Welcome back! Please enter your credentials
          </Text>
        </CardHeader>

        <CardBody>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} w="full">
              {error && (
                <Alert status="error" borderRadius="md">
                  <AlertIcon />
                  {error}
                </Alert>
              )}

              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="JohnDoe"
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                  focusBorderColor="green.400"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  focusBorderColor="green.400"
                />
              </FormControl>
            </VStack>
          </form>
        </CardBody>

        <CardFooter justify="flex-end" gap={2}>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            colorScheme="green"
            onClick={handleSubmit}
            isLoading={false} // You can connect this to a loading state from your hook
          >
            Log in
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default LoginPage;
