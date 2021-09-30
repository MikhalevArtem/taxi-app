import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Введите адрес электронной почты")
    .email("Введите корректный адрес электронной почты")
    .required("Введите адрес электронной почты"),
  password: yup
    .string("Введите пароль")
    .min(6, "Длина пароля не менее 6 символов")
    .required("Введите пароль"),
  name: yup
    .string("Имя должно быть строкой")
    .matches(/^[а-яА-ЯёЁ]+$/, "Только русские буквы")
    .required("Введите своё имя"),
  surname: yup
    .string("Имя должно быть строкой")
    .matches(/^[а-яА-ЯёЁ]+$/, "Только русские буквы")
    .required("Введите свою фамилию"),
});

export { validationSchema };
