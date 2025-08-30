import {
  Button,
  Card,
  Field,
  Input,
  Stack,
  AbsoluteCenter,
} from "@chakra-ui/react";

function LoginPage() {
  return (
    <AbsoluteCenter>
      <Card.Root maxW="sm" colorPalette={"green"} variant={"elevated"}>
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
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Log in</Button>
        </Card.Footer>
      </Card.Root>
    </AbsoluteCenter>
  );
}

export default LoginPage;
