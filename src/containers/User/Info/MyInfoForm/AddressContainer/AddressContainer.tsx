import { ReactElement } from "react";

import { useForm } from "react-hook-form";

import { AddressInput } from "components/User/Info/AddressInput/AddressInput";
import { IAddressFormValues } from "dataflows/InfoForm/Address/IAddressFormValues";

import { IAddressContainerProps } from "./IAddressContainerProps";

/**
 * The AddressContainer component.
 * @param {IAddressContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const AddressContainer = (props: IAddressContainerProps): ReactElement => {
  const { addressFormValues } = props;

  const {
    register,
    formState: { errors },
  } = useForm<IAddressFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: addressFormValues,
  });

  return <AddressInput errors={errors} register={register} />;
};
