import React, { type RefObject } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  AbsoluteCenter,
  VStack,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<HTMLButtonElement | null>;
};

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, btnRef }) => {
  const navigate = useNavigate();


  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>To-Do Menu</DrawerHeader>
          <Center>
            <Box bg="black" w="90%" h="1px"></Box>
          </Center>

          <DrawerBody>
            <VStack>
              <Button variant={"ghost"} onClick={() => navigate("/dashboard")}>Home</Button>
              <Button variant={"ghost"} onClick={() => navigate("/generate")}>Generate</Button>
              <Button variant={"ghost"}>Settings</Button>
              <Button variant={"ghost"} onClick={() => navigate("/login")}>Login</Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
