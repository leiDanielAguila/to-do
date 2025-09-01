import { Button, Card, Field, Input, Stack, Flex } from "@chakra-ui/react";
import { SampleLogin } from "@/hooks/LoginHook";
import type { LoginForm } from "@/types/LoginPage.types";
import { useState } from "react";


function LoginPage() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const { validateLogin, loggedIn, error } = SampleLogin(loginForm)
  
  const handleSubmit = () => {
    validateLogin()

    loggedIn ? true : error 
  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      minH="100vh"
      gap={{ base: 6, md: 10 }}
      p={4}
      bg={"green.300"}
    >
      {/* Card section */}
      <Card.Root
        w={{ base: "full", md: "sm" }}
        colorPalette="green"
        variant="elevated"
        shadow="md"
      >
        <Card.Header>
          <Card.Title>Log In</Card.Title>
          <Card.Description>
            Welcome back please enter your credentials
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input
                placeholder="JohnDoe"
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input type="password" 
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({... loginForm, password: e.target.value})
                }
              />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end" gap={2}>
          <Button variant="outline">Cancel</Button>
          <Button variant="solid" onClick={handleSubmit}>Log in</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
}

export default LoginPage;
