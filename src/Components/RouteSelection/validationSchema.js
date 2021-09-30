import * as yup from "yup";

const validationSchema = yup.object({
  addressFrom: yup
    .string("Выберите адрес отправления")
    .required("Выберите адрес отправления"),
  addressTo: yup
    .string("Выберите адрес назначения")
    .required("Выберите адрес назначения"),
});

export { validationSchema };
