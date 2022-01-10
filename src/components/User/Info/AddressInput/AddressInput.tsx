import { ReactElement } from "react";

import { BiPencil } from "react-icons/bi";

import { USER_ADDRESS } from "constants/userConstant";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

import { IAddressInputProps } from "./IAddressInputProps";

/**
 * The AddressInput component.
 * @param {IAddressInputProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const AddressInput = (props: IAddressInputProps): ReactElement => {
  const { errors, register } = props;
  return (
    <FormControl isInvalid={errors.address !== undefined}>
      <FormLabel htmlFor="address">{USER_ADDRESS}</FormLabel>
      <InputGroup size="md">
        <Input id="address" errorBorderColor="red.300" {...register("address")} />
        <InputRightElement>
          <BiPencil color="#3870FF" />
        </InputRightElement>
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </InputGroup>
    </FormControl>
  );
};
