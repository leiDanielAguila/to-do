import React, { type RefObject } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<HTMLButtonElement | null>;
};

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, btnRef }) => {
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

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
