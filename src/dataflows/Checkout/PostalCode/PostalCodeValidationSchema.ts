import * as yup from "yup";

export const PostalCodeValidationSchema = yup.object().shape({
  postalCode: yup.number().required("Debe ingresar el código postal"),
});
