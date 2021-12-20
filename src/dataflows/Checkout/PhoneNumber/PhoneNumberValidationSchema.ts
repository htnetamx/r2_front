import * as yup from "yup";

export const PhoneNumberValidationSchema = yup.object().shape({
  phone: yup.string().required("Debe ingresar su número de teléfono"),
});
