import { ReactElement } from "react";

import { useForm } from "react-hook-form";

import { NameInput } from "components/User/Info/NameInput/NameInput";
import { INameFormValues } from "dataflows/InfoForm/Name/INameFormValues";

import { INameContainerProps } from "./INameContainerProps";

/**
 * The NameContainer component.
 * @param {INameContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const NameContainer = (props: INameContainerProps): ReactElement => {
  const { nameFormValues } = props;

  const {
    register,
    formState: { errors },
  } = useForm<INameFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: nameFormValues,
  });

  return <NameInput errors={errors} register={register} />;
};
