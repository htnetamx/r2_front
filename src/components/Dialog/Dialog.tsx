import { AiFillDelete } from "react-icons/ai";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { DialogTypeEnum } from "./DialogTypeEnum";
import { IDialogProps } from "./IDialogProps";

/**
 * Dialog component.
 * @param {IDialogProps} props - The properties.
 * @returns {ReactElement} The dialog component.
 **/
export const Dialog = (props: IDialogProps): React.ReactElement => {
  const { isOpen, title, content, onClose, primaryAction } = props;
  /**
   * Renders the dialog button.
   * @returns {JSX.Element} The dialog button.
   **/
  const actionButton = (): JSX.Element => {
    switch (props.dialogType) {
      case DialogTypeEnum.Delete:
        return (
          <Button
            onClick={primaryAction}
            color="white"
            colorScheme="red"
            leftIcon={<AiFillDelete />}
          >
            Delete
          </Button>
        );

      case DialogTypeEnum.Alert:
        return <></>;

      default:
        return <></>;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          {actionButton()}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
