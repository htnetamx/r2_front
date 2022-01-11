import { ReactElement } from "react";

import { AddressInput } from "components/User/Info/AddressInput/AddressInput";

import { IAddressContainerProps } from "./IAddressContainerProps";

/**
 * The AddressContainer component.
 * @param {IAddressContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const AddressContainer = (props: IAddressContainerProps): ReactElement => {
  const { errors, register } = props;

  return <AddressInput errors={errors} register={register} />;
};
