import * as yup from "yup";

export const NameAndTermConditionsValidationSchema = yup.object().shape({
  name: yup.string().required("Debe ingresar su nombre"),
  isTermsAccepted: yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones."),
});
