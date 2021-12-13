import * as yup from "yup";

export const LogInStepValidationSchema = yup.object().shape({
  name: yup.string().required("Requerido"),
  phone: yup.string().required("Requerido"),
  isTermsAccepted: yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones."),
});
