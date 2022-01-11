import * as yup from "yup";

export const InfoFormValidationSchema = yup.object().shape({
  name: yup.string().required("Debe ingresar su nombre"),
  address: yup.string().required("Debe ingresar su dirección"),
});
