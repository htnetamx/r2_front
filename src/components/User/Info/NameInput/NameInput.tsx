import { ReactElement } from "react";

import { BiPencil } from "react-icons/bi";

import { USER_NAME } from "constants/userConstant";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

import { INameInputProps } from "./INameInputProps";

/**
 * The NameInput component.
 * @param {INameInputProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const NameInput = (props: INameInputProps): ReactElement => {
  const { errors, register } = props;
  return (
    <FormControl isInvalid={errors.name !== undefined}>
      <FormLabel htmlFor="username">{USER_NAME}</FormLabel>
      <InputGroup size="md">
        <Input id="name" errorBorderColor="red.300" {...register("name")} />
        <InputRightElement>
          <BiPencil color="#3870FF" />
        </InputRightElement>
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </InputGroup>
    </FormControl>
  );
};
