import { ReactElement } from "react";

import { NameInput } from "components/User/Info/NameInput/NameInput";

import { INameContainerProps } from "./INameContainerProps";

/**
 * The NameContainer component.
 * @param {INameContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const NameContainer = (props: INameContainerProps): ReactElement => {
  const { errors, register } = props;

  return <NameInput errors={errors} register={register} />;
};
